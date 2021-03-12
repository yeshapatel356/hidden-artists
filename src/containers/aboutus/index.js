import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Logo from "../../img/logo.jpg";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: 1900,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  media: {
    height: 140,
  },
}));

export default function Aboutus() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xl={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={Logo} className={classes.logo} alt="hiddenartist" />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                HIDDEN ARTISTS
              </Typography>
              <Typography
                className={classes.highlight}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                For us art is a way to forget life. If you ask us... What we
                came to do in this world... We an artist
                <span role="img">🎨</span> Will answer you: WE ARE HERE TO LIVE
                OUT LOUD
              </Typography>
              <Typography>
                Hobby is something which we do in our leisure or free time. we
                do those things which usually gives us a lot of pleasure and
                joy. It's best way to express yourself without even speaking a
                word. The strangest thing about hobby is that nobody taught us
                how to paint. Art play an important role in mental development
                and it increases creative skill, relaxes the mind. It makes me
                more happy and resilient. It also improves my memory. I love
                colors so when I wake up early in the morning I keep gazing the
                beauty of nature around me like cloud, trees, birds and
                everything around me. I love to go to art galleries and see the
                paintings from different angles and dimensions.Hance, I started
                pages to shocase my talent. Since I am majored in computer
                science, I wanted to make website. I Love doing experiments and
                tring out new thigs.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <iframe
              title="likepage"
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=138&layout=button&action=like&size=large&share=true&height=65&appId=3542482812546300"
              width={138}
              height={65}
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
