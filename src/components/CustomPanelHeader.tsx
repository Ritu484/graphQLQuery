import { IconButton } from "@fluentui/react";
import { Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

type Props = {
  title: string;
  navigateTo: string;
  loading:boolean
};

const CustomPanelHeader = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    headerContainer: {
      position: "fixed",
      top: 0,
      width: "100%",
      height: "50px",
      alignItems: "center",
      boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.1)",
      fontSize: 18,
      backgroundColor: "white",
      zIndex: 1,
    },
    titleContainer: {
      fontWeight: 600,
      paddingLeft: 20,
      display: "flex",
      flex: 1,
    },
  }));
  let navigate = useNavigate();
  const { title, navigateTo } = props;
  const styles = useStyles();
  const iconProps = { iconName: "ChromeClose" };
  const handleCloseClick = () => {
    navigate(navigateTo);
  };
  if (props.loading)
  return(<LoadingScreen/>)
  return (
    <Stack horizontal className={styles.headerContainer}>
      <Stack className={styles.titleContainer}>{title}</Stack>
      <Stack style={{ display: "flex", marginRight: 10 }}>
        <IconButton iconProps={iconProps} onClick={handleCloseClick} />
      </Stack>
    </Stack>
  );
};
export default CustomPanelHeader;
