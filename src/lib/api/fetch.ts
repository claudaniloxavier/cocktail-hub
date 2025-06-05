// lib/fetcher.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type FetchOptions<TBody = unknown> = {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: TBody;
  timeoutMs?: number;
  queryParams?: Record<string, string | number | boolean>;
};

type ApiError = {
  message: string;
  status: number;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function fetcher<TResponse, TBody = unknown>(
  endpoint: string,
  options: FetchOptions<TBody> = {}
): Promise<TResponse> {
  const {
    method = "GET",
    headers = {},
    body,
    timeoutMs = 10000,
    queryParams,
  } = options;

  const url = new URL(endpoint, BASE_URL);

  if (queryParams) {
    Object.entries(queryParams).forEach(([key, value]) =>
      url.searchParams.append(key, String(value))
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url.toString(), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      let errorMessage = res.statusText;
      try {
        const errorData = (await res.json()) as Partial<ApiError>;
        errorMessage = errorData.message || errorMessage;
      } catch {}

      const error: ApiError = {
        message: errorMessage,
        status: res.status,
      };
      throw error;
    }

    return (await res.json()) as TResponse;
  } catch (error: unknown) {
    clearTimeout(timeout);

    if (error instanceof DOMException && error.name === "AbortError") {
      throw {
        message: "Request timeout",
        status: 408,
      } satisfies ApiError;
    }

    if (typeof error === "object" && error !== null && "message" in error) {
      throw error as ApiError;
    }

    throw {
      message: "Unknown error",
      status: 500,
    } satisfies ApiError;
  }
}
