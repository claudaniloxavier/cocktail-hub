import { Typography } from "@mui/material";

import { InfoCardProps as Props } from "./types";
import Styled from "./styles";

export default function InfoCard({ label, value }: Props) {
  return (
    <Styled.Paper variant="outlined">
      <Typography
        variant="h6"
        fontWeight="600"
        color="text.secondary"
        noWrap
        fontFamily="Open Sans"
        lineHeight={1}
      >
        {label}
      </Typography>

      <Typography
        variant="body2"
        fontWeight="400"
        color="text.secondary"
        fontFamily="Inter"
      >
        {value}
      </Typography>
    </Styled.Paper>
  );
}
