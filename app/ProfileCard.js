import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Container, Grid } from "@mui/material";
import Image from "next/image";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProfileCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        background: "#fff",
        color: "black",
        borderRadius: "8px",
        padding: "12px",
        marginTop: "12px",
      }}
    >
      <Grid
        container
        sx={{ padding: "16px", alignItems: "center", height: "100%" }}
        spacing={2}
      >
        <Grid
          item
          sx={{ display: "grid", placeItems: "center" }}
          lg={7}
          md={6}
          xs={12}
        >
          <div
            className="image-container"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <Image
              src="/profile.png"
              fill
              alt="Profile Picture"
              // objectFit="cover"
            />
          </div>
          <Button
            download
            href="https://drive.google.com/file/d/1r6XnFz1boMjvu97111BxJVaFpR2oLm5o/view?usp=sharing"
            variant="contained"
            style={{ margin: "8px" }}
          >
            Download CV
          </Button>
        </Grid>
        <Grid
          item
          sx={{ display: "grid", rowGap: "20px" }}
          lg={5}
          md={6}
          xs={12}
        >
          <div>
            <Typography variant="p">Hello Everybody, I&apos;m</Typography>
          </div>
          <div>
            <Typography variant="h3">Tirth Raj Kumar</Typography>
          </div>
          <div>
            <Typography variant="h6">Frontend/Mern Developer</Typography>
          </div>
          <div>
            <Typography variant="p">
              Welcome to my profile! I am a highly motivated and creative
              professional with a strong passion for utilizing my skills and
              expertise in various technologies to drive innovation and
              contribute to the long-term success of organizations. With a solid
              background in frontend and backend development, I possess in-depth
              knowledge of React, Next.js, Redux, Node.js, Git, AWS, and
              GraphQL.
            </Typography>
          </div>
          <div>
            <Typography variant="p" component="h4">
              +91,7978821389
            </Typography>
          </div>
          <div>
            <Typography variant="p" component="h4">
              stirthraj.12345@gmail.com
            </Typography>
          </div>
          <div>
            <Typography variant="p" component="h4">
              Gurugram|Delhi|Noida
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
