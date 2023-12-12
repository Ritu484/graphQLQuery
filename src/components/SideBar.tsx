import { useState } from "react";
import { Nav, initializeIcons, INavLink } from "@fluentui/react";
import { Image, IImageProps, ImageFit } from "@fluentui/react/lib/Image";
import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import { Stack, IStackStyles, IStackTokens } from "@fluentui/react/lib/Stack";
import { TestImages } from "@fluentui/example-data";
import { Label } from "@fluentui/react/lib/Label";
import starWars from "../assets/star-wars.svg";

const imageProps: IImageProps = {
  imageFit: ImageFit.contain,
  width: 100,
  height: 100,

  // Show a border around the image (just for demonstration purposes)
};

const navigationStyles = {
  root: {
    //overflowY: "auto",
    paddingTop: "5vh",
    width: 200,
  },
};

const links = [
  {
    links: [
      {
        name: "Planets",
        key: "key1",
        url: "/planets",
        iconProps: {
          iconName: "6PointStar",
          styles: {
            root: {
              fontSize: 20,
              color: "#106ebe",
            },
          },
        },
      },
      {
        name: "Species",
        key: "key2",
        url: "/species",
        iconProps: {
          iconName: "6PointStar",
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
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  return (
    <Stack
      style={{
        boxSizing: "border-box",
        border: "1px solid #eee",
        height: "100vh",
       
        alignItems: "center",
        // alignContent:'center',
        // justifyContent:'center'
      }}
    >
      <Image
        {...imageProps}
        src={starWars}
        alt="Example with no image fit value and no height or width is specified."
      />

      <Nav
        groups={links}
        selectedKey={selectedOption}
        styles={navigationStyles}
        onLinkClick={_onLinkClick}
      />
    </Stack>
  );
  function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    setSelectedOption(item?.key);
  }
};

export default SideBar;
