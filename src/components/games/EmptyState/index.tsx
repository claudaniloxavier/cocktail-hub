import { Card, Typography } from "@mui/material";

export default function EmptyState() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderRadius: 1,
        p: 2,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        No Games Available
      </Typography>

      <Typography variant="body1">
        It seems we couldn&apos;t find any games right now. Please try again
        later or check back soon!
      </Typography>
    </Card>
  );
}
