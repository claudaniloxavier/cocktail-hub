import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function GameCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        p: 2,
        border: "1px solid",
        borderColor: "#f97316",
        borderRadius: 1,
        boxShadow: 0,
        maxWidth: isMobile ? "100%" : 240,
      }}
    >
      <CardMedia
        component="img"
        image="/images/flocos.png" // substitua pelo caminho correto
        alt="Sorvete Flocos"
        sx={{
          width: isMobile ? 60 : 120,
          height: isMobile ? 60 : 160,
          objectFit: "contain",
          mr: isMobile ? 2 : 0,
          mb: isMobile ? 0 : 2,
        }}
      />

      <CardContent
        sx={{
          p: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "flex-start" : "center",
          textAlign: isMobile ? "left" : "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Flocos
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Not Co | Vegano | 2 Litros
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#f97316",
            color: "#000",
            fontWeight: "bold",
            textTransform: "none",
            px: 3,
            py: 1,
            alignSelf: isMobile ? "flex-start" : "center",
            "&:hover": {
              borderColor: "#f97316",
              backgroundColor: "#fff7ed",
            },
          }}
        >
          Ver mais
        </Button>
      </CardContent>
    </Card>
  );
}
