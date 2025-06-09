import { List, Typography } from "@mui/material";

import { InfoListProps as Props } from "./types";
import Styled from "./styles";

export default function InfoList({ list }: Props) {
  return (
    <List dense sx={{ mt: 2 }}>
      {list.map(({ label, value }) => (
        <Styled.ListItem
          key={`secondary-info-${label}`}
          divider={
            list.length - 1 !==
            list.findIndex(
              (item) => item.label === label && item.value === value
            )
          }
          disableGutters
        >
          <Typography variant="body2" fontWeight="400" color="text.secondary">
            {label}
          </Typography>

          <Typography variant="body2" fontWeight="400" color="text.secondary">
            {value}
          </Typography>
        </Styled.ListItem>
      ))}
    </List>
  );
}
