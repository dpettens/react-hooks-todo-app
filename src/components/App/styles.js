import { global, button } from "../../jss/base";

export default function styles(theme) {
  return {
    "@global": global(theme),
    themeButton: {
      extend: button(theme),
      position: "fixed",
      top: "15px",
      right: "15px"
    },
    todosContainer: {
      display: "flex",
      margin: "80px auto 0 auto",
      padding: "0 15px",
      flexDirection: "column",
      alignItems: "center",
      "@media (min-width: 630px)": {
        width: "600px"
      }
    },
    title: {
      margin: "0 0 1.5rem 0",
      fontSize: "2.2rem",
      textAlign: "center"
    }
  };
}
