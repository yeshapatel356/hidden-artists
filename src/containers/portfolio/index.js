import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,

    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xl={4}>
          <Card className={classes.root}>
            <iframe
              title="timeline"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHiddenartist5%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3542482812546300"
              width={500}
              height={500}
              style={{ border: "none", overflow: "hidden", padding: "50px" }}
              scrolling="no"
              frameBorder={0}
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
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
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
