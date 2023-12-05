import React from "react";
import { Nav, initializeIcons } from "@fluentui/react";

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
        url: "/TestPage",
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

const HomePage = () => {
  initializeIcons();
  return <Nav groups={links} selectedKey="key1" styles={navigationStyles} />;
};

export default HomePage;
