import React from "react";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    color: "green",
  },
}));

export default function Followus() {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.root}>
        <ListItem>
          <a
            href="https://www.instagram.com/hidden__artists/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "30px" }}></FaInstagram>
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.facebook.com/Hiddenartist5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={{ fontSize: "30px" }}></FaFacebook>
          </a>
        </ListItem>

        <ListItem>
          <a
            href="mailto:hiddenartistsoffical@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail style={{ fontSize: "30px" }}></FiMail>
          </a>
        </ListItem>
      </List>
    </div>
  );
}
