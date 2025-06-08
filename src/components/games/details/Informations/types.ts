type GameInfoItem = {
  label: string;
  value: string;
};

export interface GameInformation {
  mainInfo: GameInfoItem[];
  secondaryInfo: GameInfoItem[];
}
