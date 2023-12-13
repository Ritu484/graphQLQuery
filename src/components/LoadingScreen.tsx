import { Stack } from "@fluentui/react";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";
import { makeStyles } from "@fluentui/react";

const LoadingScreen = () => {
  const useStyles = makeStyles((theme) => ({
    centeredContainer: {
      height: "90vh",
      width: "90vw",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
   const styles = useStyles();
  return (
    <Stack className={styles.centeredContainer}>
      <ProgressIndicator description="Loading data" />
    </Stack>
  );
};
export default LoadingScreen;
