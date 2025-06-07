type Genre = {
  name: string;
};

type Platform = {
  id: number;
  name?: string;
  slug?: string;
};

type Cover = {
  url: string;
};

export interface Game {
  id: number;
  name: string;
  summary?: string;
  cover?: Cover;
  genres?: Genre[];
  platforms?: Platform[];
  rating?: number;
  first_release_date: number;
}
