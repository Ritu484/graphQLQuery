import { FontSizes, makeStyles } from "@fluentui/react";

export const useStyles = makeStyles((theme) => ({
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleBarContainer: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "right",
  },
  sideBarContainer: {
    position: "fixed",
    height: "100vh",
    width: 200,
    backgroundColor: "white",
    zIndex: 1,
  },
  listViewContainer: {
    position: "relative",
    top: "10vh",
    left: "200px",
    overflowY: "scroll",
    overflowX: "scroll",
  //  height: "90vh",
    //width: "85vw",
    alignItems: "center",
  },
}));
