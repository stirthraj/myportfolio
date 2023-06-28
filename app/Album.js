import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [
  {
    image: "/portfolio.png",
    title: "Portfolio Template",
    description:
      "Minimalistic and responsive single-page portfolio design template built with Next.js for a sleek and modern presentation.",
    link: "https://tirthrajkumar.vercel.app/",
  },
  {
    image: "/school.png",
    title: "School Template",
    description:
      "Next.js template for a single-page school design, featuring a clean and intuitive layout to showcase educational content.",
    link: "https://school1-theta.vercel.app/",
  },
];

export default function Album() {
  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Work Samples
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Upcoming work sample. Stay tuned for a sneak peek of what&apos;s to
            come. Exciting things ahead!
          </Typography>
        </Container>
      </Box>
      <div id="#album" />
      <Container sx={{ py: 8, padding: "10% !important" }} maxWidth="xl">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.title} xs={12} md={6}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image={card.image}
                  // image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" href={card.link}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
