import { IconButton } from "@fluentui/react";
import { Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  navigateTo: string;
};

const CustomPanelHeader = (props: Props) => {
  const useStyles = makeStyles((theme) => ({
    headerContainer: {
      display: "flex",
      minWidth: "100%",
      marginBottom: 24,
      height: "50px",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.1)",
      fontSize: 18,
    },
  }));
  let navigate = useNavigate();
  const { title, navigateTo } = props;
  const styles = useStyles();
  const iconProps = { iconName: "ChromeClose" };
  const handleCloseClick = () => {
    navigate(navigateTo);
  };
  return (
    <Stack horizontal className={styles.headerContainer}>
      <Stack
        style={{
          display: "flex",
          fontWeight: 600,
          paddingLeft: 20,
          width: "100%",
        }}
      >
        {title}
      </Stack>
      <Stack
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton iconProps={iconProps} onClick={handleCloseClick} />
      </Stack>
    </Stack>
  );
};
export default CustomPanelHeader;
