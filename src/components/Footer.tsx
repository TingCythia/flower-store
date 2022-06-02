import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { CSSProperties } from '@material-ui/core/styles/withStyles'

const footerStyle: CSSProperties = {
  textAlign: "center",
  
}

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
             {/*  <Box borderBottom={1}>Help</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box> */}
             
              
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <div style={{ ...footerStyle }}>
            Made by students of Medieinstitutet &reg; {new Date().getFullYear()}
            </div>
          </Box>
        </Container>
      </Box>
    </footer>
  
  );
}
