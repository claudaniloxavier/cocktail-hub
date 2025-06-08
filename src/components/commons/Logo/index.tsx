import Styled from "./styles";

import { LogoProps as Props } from "./types";

export default function Logo({ color = "text.secondary" }: Props) {
  return (
    <Styled.Box sx={{ display: "flex", alignItems: "center" }}>
      <Styled.Typography variant="h6" noWrap color={color}>
        GAMING HUB
      </Styled.Typography>
    </Styled.Box>
  );
}
