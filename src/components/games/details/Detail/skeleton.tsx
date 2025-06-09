import { Grid, Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import Show from "@/components/commons/Show";

import Styled from "./styles";

export default function GameDetailSkeleton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const MOCK_SKELETON_CARD = Array.from({ length: isMobile ? 4 : 8 }, () =>
    crypto.randomUUID()
  );
  const MOCK_SKELETON_LIST = isMobile
    ? Array.from({ length: 4 }, () => crypto.randomUUID())
    : [];

  return (
    <>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={isMobile ? 180 : 595}
      />

      <Styled.Card data-testid="game-detail-skeleton">
        {!isMobile && <Skeleton variant="text" height={48} width="80%" />}

        <Skeleton variant="text" height={20} width="20%" />

        <Box sx={{ mt: 3, mb: 3 }}>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {MOCK_SKELETON_CARD.map((item) => (
              <Grid
                component="div"
                key={`info-item-skeleton-${item}`}
                size={{ xs: 6, md: 3 }}
              >
                <Skeleton
                  variant="rounded"
                  height={isMobile ? 65 : 89}
                  width="100%"
                />
              </Grid>
            ))}
          </Grid>

          <Show if={MOCK_SKELETON_LIST.length > 0}>
            {MOCK_SKELETON_LIST.map((item) => (
              <Skeleton
                key={`info-card-skeleton-list-${item}`}
                variant="text"
                width="100%"
                height={32}
              />
            ))}
          </Show>
        </Box>

        <Skeleton variant="text" height={32} width="50%" />

        <Skeleton variant="text" height={20} width="100%" />
        <Skeleton variant="text" height={20} width="100%" />
        <Skeleton variant="text" height={20} width="100%" />
      </Styled.Card>
    </>
  );
}
