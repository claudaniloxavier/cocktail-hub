import { Box, Grid } from "@mui/material";
import InfoCard from "@/components/commons/InfoCard";
import InfoList from "@/components/commons/InfoList";

import { GameInformation } from "./types";

export default function GameInformations({
  mainInfo,
  secondaryInfo,
}: GameInformation) {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={2}>
        {mainInfo.map(({ label, value }) => (
          <Grid
            component="div"
            key={`info-item-${label}-${value}`}
            size={{ xs: 6, md: 3 }}
          >
            <InfoCard label={label} value={value} />
          </Grid>
        ))}
      </Grid>

      {secondaryInfo.length > 0 && <InfoList list={secondaryInfo} />}
    </Box>
  );
}
