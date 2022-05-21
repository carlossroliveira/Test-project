import { Box, Grid } from "@mui/material";
import { Form } from "../Form";
import { ContainerSC, DivFirstSC, DivSecondSC } from "./layoutStyles";
import photo from '../../assets/logoT.png';

export const Layout = () => {
  return (
    <ContainerSC>
      <Box>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <DivFirstSC>
              <Form />
            </DivFirstSC>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <DivSecondSC>
              <img src={photo} alt="Company's logo" />
            </DivSecondSC>
          </Grid>
        </Grid>
      </Box>
    </ContainerSC>
  );
};
