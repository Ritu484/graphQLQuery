import { FontIcon } from "@fluentui/react/lib/Icon";
import { mergeStyles, mergeStyleSets } from "@fluentui/react/lib/Styling";

const ColoredEyeComponent = (props: any) => {
  const iconClass = mergeStyles({
    fontSize: 15,
    color: props.color,
  });
  return (
    <div>
      <FontIcon
        aria-label="Compass"
        // color="deepskyblue"
        iconName="FullCircleMask"
        //  color={props.color}
        className={iconClass}
      />
    </div>
  );
};

export default ColoredEyeComponent;
