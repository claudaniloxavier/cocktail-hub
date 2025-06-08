import { Typography } from "@mui/material";
import Styled from "./styles";

import { InfoCardProps as Props } from "./types";

export default function InfoCard({ label, value }: Props) {
  return (
    <Styled.Paper variant="outlined">
      <Typography variant="h6" fontWeight="600" color="text.secondary" noWrap>
        {label}
      </Typography>

      <Typography variant="body2" fontWeight="400" color="text.secondary">
        {value}
      </Typography>
    </Styled.Paper>
  );
}
