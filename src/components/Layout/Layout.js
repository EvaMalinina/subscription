import React from "react";
import styles from "./styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SnackBar from "../SnackBar/SnackBar";


const useStyles = makeStyles(styles);

const Layout = ({ children }) => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <SnackBar/>
      <main className={classes.content}>{children}</main>
    </div>
  )
};

export default Layout;