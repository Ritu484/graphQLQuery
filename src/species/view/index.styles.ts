import { FontSizes, makeStyles } from "@fluentui/react";

export const useStyles = makeStyles((theme) => ({
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    display: "flex",
    minWidth: "100%",
    marginBottom: 24,
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
    fontSize: 18,
  },
}));
