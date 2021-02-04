import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
// import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ color: "#e0f2f1", backgroundColor: "#004d40" }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AtCoder Bookmarks
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HelpIcon
              onClick={() => {
                window.location.href =
                  "https://github.com/Kuri174/AtCoder-Bookmarks";
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
