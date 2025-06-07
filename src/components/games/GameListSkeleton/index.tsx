import { GameCardSkeleton } from "./GameCardSkeleton";

const MOCK_SKELETON_ITENS = Array.from({ length: 12 }, (_, index) => index + 1);

export default function GameListSkeleton() {
  return (
    <>
      {MOCK_SKELETON_ITENS.map((item) => (
        <GameCardSkeleton key={`skeleton-${item}`} />
      ))}
    </>
  );
}
