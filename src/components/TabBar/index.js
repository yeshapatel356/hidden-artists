import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Logo from "../../img/logo.jpg";
import Portfolio from "../../containers/portfolio";
import Aboutus from "../../containers/aboutus";
import Contactus from "../../containers/contactus";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: "10%",
    height: "10%",
    borderRadius: "100px",
    alignContent: "left",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <img src={Logo} className={classes.logo} alt="hiddenartist" />
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Portfolio" />
        <Tab label="Contact Us" />
        <Tab label="About Us" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Portfolio />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Contactus />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Aboutus />
      </TabPanel>
    </Paper>
  );
}
