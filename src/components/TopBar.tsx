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

const TopBar = () => {
  return (
    <Stack
      style={{
        // borderRight: "1px solid #eee",
        padding: 10,
        alignItems: "center",
        position: "fixed",
        left: 0,
        top: 0,
        backgroundColor: "white",
        width: 200,
      }}
    >
      {/* <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}> */}
      <Image
        {...imageProps}
        src={starWars}
        alt="Example with no image fit value and no height or width is specified."
      />
    </Stack>
  );
};
export default TopBar;
