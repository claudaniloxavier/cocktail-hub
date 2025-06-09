import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";

import Styled from "./styles";

export const GameCardSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Styled.SkeletonCard data-testid="game-card-skeleton">
      <Skeleton
        variant="rectangular"
        width={isMobile ? 96 : 232}
        height={isMobile ? 96 : 232}
      />

      <Box sx={{ flex: 1 }}>
        <Styled.SkeletonInfoBox>
          <Skeleton variant="text" width={194} height={48} />
          <Skeleton variant="text" width={124} height={24} sx={{ mt: -1 }} />
        </Styled.SkeletonInfoBox>

        <Skeleton
          variant="rounded"
          width={isMobile ? 198 : 232}
          height={isMobile ? 40 : 54}
        />
      </Box>
    </Styled.SkeletonCard>
  );
};
