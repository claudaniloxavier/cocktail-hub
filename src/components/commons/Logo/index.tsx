import { LogoProps as Props } from "./types";
import Styled from "./styles";

export default function Logo({ color = "text.secondary" }: Props) {
  return (
    <Styled.Box sx={{ display: "flex", alignItems: "center" }}>
      <Styled.Typography
        variant="h6"
        noWrap
        color={color}
        sx={{ userSelect: "none" }}
      >
        GAMING HUB
      </Styled.Typography>
    </Styled.Box>
  );
}
