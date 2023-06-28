import { VolumeDown } from "@mui/icons-material";
import { Grid, Slider, Stack, Typography } from "@mui/material";

export default function AboutCard() {
  return (
    <Grid
      container
      pt={4}
      spacing={2}
      sx={{ marginBottom: "30px", padding: "0% 10%" }}
    >
      <Grid item lg={6} md={6} xs={12}>
        <Grid container direction="column" rowGap={4} spacing={2}>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
            xs={6}
          >
            <div>
              <Typography variant="h2">ABOUT MYSELF</Typography>
            </div>
            <div>
              <Typography variant="p">
                Welcome to my profile! I am a highly motivated and creative
                professional with a strong passion for utilizing my skills and
                expertise in various technologies to drive innovation and
                contribute to the long-term success of organizations. With a
                solid background in frontend and backend development, I possess
                in-depth knowledge of React, Next.js, Redux, Node.js, Git, AWS,
                and GraphQL.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Grid container spacing={2}>
              <Grid
                style={{
                  border: "1px solid #fff",
                  borderRadius: "4px",
                }}
                item
                xs={4}
              >
                <Typography variant="h6" component="h6">
                  5
                </Typography>
                <Typography variant="h6" component="h6">
                  React Projects
                </Typography>
              </Grid>
              <Grid
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
                item
                xs={4}
              >
                <Typography variant="h6" component="h6">
                  3
                </Typography>
                <Typography variant="h6" component="h6">
                  Redux Projects
                </Typography>
              </Grid>
              <Grid
                style={{ border: "1px solid #fff", borderRadius: "4px" }}
                item
                xs={4}
              >
                <Typography variant="h6" component="h6">
                  3
                </Typography>
                <Typography variant="h6" component="h6">
                  Node Projects
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            React: 90%
          </Typography>
          <Slider
            color="primary"
            defaultValue={90}
            aria-label="Disabled slider"
          />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            Next: 80%
          </Typography>
          <Slider
            color="primary"
            defaultValue={80}
            aria-label="Disabled slider"
          />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            Redux: 85%
          </Typography>
          <Slider
            color="primary"
            defaultValue={85}
            aria-label="Disabled slider"
          />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            Node: 80%
          </Typography>
          <Slider
            color="primary"
            defaultValue={80}
            aria-label="Disabled slider"
          />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            MongoDb: 80%
          </Typography>
          <Slider
            color="primary"
            defaultValue={80}
            aria-label="Disabled slider"
          />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="flex-start"
        >
          <Typography variant="p" component="h4">
            AWS: 70%
          </Typography>
          <Slider
            color="primary"
            defaultValue={70}
            aria-label="Disabled slider"
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
