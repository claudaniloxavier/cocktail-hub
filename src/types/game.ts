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

type GameEngine = {
  id: number;
  name: string;
};

type GameType = {
  id: number;
  type: string;
};

export interface Game {
  id: number;
  name: string;
  cover?: Cover;
  summary?: string;
  storyline?: string;
  first_release_date: number;
  game_engines: GameEngine[];
  game_type: GameType;
  genres?: Genre[];
  platforms?: Platform[];
  rating?: number;
  dlcs?: string[];
}
