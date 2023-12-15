import { makeStyles } from "@fluentui/react";

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
    alignItems: "center",
    boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.1)",
    fontSize: 18,
  },
  wrapContainer: {
    display: "flex",
    flexWrap: "wrap",
    wordBreak: "break-all",
    whiteSpace: "break-spaces",
  },
}));
