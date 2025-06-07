type Genre = {
  name: string;
};

type Platform = {
  name: string;
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
}
