import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Paint from "../../img/paint.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: 1900,
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Contactus = () => {
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
          <MDBRow>
            <MDBCol style={{ maxWidth: "40rem" }}>
              <MDBCard reverse>
                <MDBCardImage cascade style={{ height: "20rem" }} src={Paint} />

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>Adventure Of Artists</MDBCardTitle>
                  <h5 className="indigo-text">
                    <strong>Arts</strong>
                  </h5>
                  <MDBCardText>
                    “Drawing makes you see things clearer, and clearer, and
                    clearer still. The image is passing through you in a
                    physiological way, into your brain, into your memory – where
                    it stays – it’s transmitted by your hands.” – Martin Gayford
                  </MDBCardText>
                  <a
                    href="https://www.instagram.com/hidden__artists/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram style={{ fontSize: "30px" }}></FaInstagram>
                  </a>
                  <a
                    href="https://www.facebook.com/Hiddenartist5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook style={{ fontSize: "30px" }}></FaFacebook>
                  </a>
                  <a
                    href="mailto:hiddenartistsoffical@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiMail style={{ fontSize: "30px" }}></FiMail>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contactus;
