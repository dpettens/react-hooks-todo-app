import { button } from "../../jss/base";

export default function styles(theme) {
  return {
    item: {
      display: "flex",
      marginBottom: "10px"
    },
    text: {
      flexGrow: 1,
      alignSelf: "center",
      textDecoration: props => (props.completed ? "line-through" : "none")
    },
    toogle: {
      extend: button(theme),
      marginRight: "10px"
    },
    delete: {
      extend: button(theme)
    }
  };
}
