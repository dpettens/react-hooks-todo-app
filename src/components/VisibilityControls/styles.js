import { button } from "../../jss/base";

export default function styles(theme) {
  return {
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    allButton: {
      extend: button(theme),
      marginRight: "10px"
    },
    activeButton: {
      extend: button(theme),
      marginRight: "10px"
    },
    completedButton: {
      extend: button(theme)
    }
  };
}
