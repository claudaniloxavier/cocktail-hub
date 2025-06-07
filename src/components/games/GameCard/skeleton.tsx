import { Box, Card, Skeleton, useMediaQuery, useTheme } from "@mui/material";

export const GameCardSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        gap: 2,
        border: "1px solid",
        borderColor: theme.palette.divider,
        borderRadius: 1,
        boxShadow: 0,
        width: isMobile ? "100%" : 266,
        height: isMobile ? 161 : 423,
      }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={isMobile ? 96 : 232}
        height={isMobile ? 96 : 232}
      />

      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            width: "100%",
          }}
        >
          <Skeleton variant="text" animation="wave" width={194} height={48} />
          <Skeleton
            variant="text"
            animation="wave"
            width={124}
            height={24}
            sx={{ mt: -1 }}
          />
        </Box>

        <Skeleton
          variant="rounded"
          animation="wave"
          width={isMobile ? 198 : 232}
          height={isMobile ? 40 : 54}
        />
      </Box>
    </Card>
  );
};
