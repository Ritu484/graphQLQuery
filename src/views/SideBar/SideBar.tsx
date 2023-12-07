import {useState} from "react";
import { Nav, initializeIcons, INavLink } from "@fluentui/react";

const navigationStyles = {
  root: {
    height: "100vh",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    paddingTop: "10vh",
  },
};

const links = [
  {
    links: [
      {
        name: "All Planets",
        key: "key1",
        url: "/AllPlanetListView",
        iconProps: {
          iconName: "News",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "All Species",
        key: "key2",
        url: "/AllSpeciesListView",
        iconProps: {
          iconName: "News",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
    ],
  },
];

const SideBar = () => {
  initializeIcons();
  const [selectedOption,setSelectedOption]=useState<string | undefined>();
  return (
    <Nav
      groups={links}
      selectedKey={selectedOption}
      styles={navigationStyles}
      onLinkClick={_onLinkClick}
    />
  );
  function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    setSelectedOption(item?.key);
  }
};

export default SideBar;

