import { button } from "../../jss/base";

export default function styles(theme) {
  return {
    form: {
      display: "flex",
      width: "100%",
      padding: "10px 20px",
      border: `1px solid ${theme.inputBorder}`,
      borderRadius: "5px",
      backgroundColor: theme.inputBackground
    },
    textInput: {
      marginRight: "20px",
      flexGrow: 1
    },
    submitButton: {
      extend: button(theme)
    }
  };
}
