import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import { Stack, IStackStyles, IStackTokens } from "@fluentui/react/lib/Stack";

import { TestImages } from "@fluentui/example-data";

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: "AL",
  text: "Annie Lindqvist",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
  
};
const TitleBar = () => {
    return (
      <Stack style={{padding:20}}>
        <Persona
          {...examplePersona}
          size={PersonaSize.size24}
          imageAlt="Annie Lindqvist, no presence detected"
        />
      </Stack>
    );
}
export default TitleBar