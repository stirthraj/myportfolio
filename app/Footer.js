import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Grid } from "@mui/material";
import Link from "next/link";

function Copyright() {
  return (
    <Typography
      style={{ textAlign: "center", fontSize: "1.1rem" }}
      variant="body2"
      color="text.secondary"
    >
      {"Copyright © "}
      <Link color="inherit" href="mailto: stirthraj.12345@gmail.com">
        TirthRajKumar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0% 10%",
          backgroundImage: "linear-gradient(to right, #54d6ff, #0071ff)",
          // minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <div id="contact" />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={8}>
            <Typography variant="h3">Tirth Raj Kumar</Typography>
            <Typography variant="p">
              Experienced Full Stack Developer | Immediate Joiner
              <br />
              React | Next.js | Redux | Node.js | Git | AWS | GraphQL |
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Typography variant="h4">Follow me</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "6px",
                color: "blue",
              }}
            >
              {[
                {
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/in/tirth-raj/",
                },
                {
                  name: "Github",
                  link: "https://github.com/stirthraj",
                },
                {
                  name: "StackOverflow",
                  link: "https://stackoverflow.com/users/11063785/tirth1620",
                },
                {
                  name: "HackerRank",
                  link: "https://www.hackerrank.com/tirth1620?hr_r=1",
                },
              ].map((dt) => (
                <div key={dt.name}>
                  <Link href={dt.link}>{dt.name}</Link>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
