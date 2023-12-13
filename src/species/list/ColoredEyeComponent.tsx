import { FontIcon } from "@fluentui/react/lib/Icon";
import { mergeStyles } from "@fluentui/react/lib/Styling";

const ColoredEyeComponent = (props: any) => {
  const iconClass = mergeStyles({
    fontSize: 15,
    color: props.color,
  });
  return (
    <FontIcon
      aria-label="FullCircleMask"
      // color="deepskyblue"
      iconName="FullCircleMask"
      //  color={props.color}
      className={iconClass}
    />
  );
};

export default ColoredEyeComponent;
