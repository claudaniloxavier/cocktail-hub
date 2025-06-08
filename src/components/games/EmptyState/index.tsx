import { Typography } from "@mui/material";
import Styled from "./styles";

export default function EmptyState() {
  return (
    <Styled.Card>
      <Typography variant="h5" component="h2" gutterBottom>
        No Games Available
      </Typography>

      <Typography variant="body1">
        It seems we couldn&apos;t find any games right now. Please try again
        later or check back soon!
      </Typography>
    </Styled.Card>
  );
}
