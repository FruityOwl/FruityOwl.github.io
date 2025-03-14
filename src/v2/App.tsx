import { Grid, StyledEngineProvider, Typography } from "@mui/material"
import { Container } from "@mui/material"
import { CharacterBuilder } from "./components/CharacterBuilder"

const AppV2 = () => {
  // TODO store this in redux or context?
  // TODO load state from URL? consider cookies/localstorage or a file

  return (
    <StyledEngineProvider injectFirst>
      <Container maxWidth={"xl"} disableGutters>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="top"
          spacing={2}
        >
          <CharacterBuilder />
        </Grid>
      </Container>
    </StyledEngineProvider>
  )
}

export default AppV2
