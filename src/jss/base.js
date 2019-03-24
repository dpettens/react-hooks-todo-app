export function global(theme) {
  return {
    "*": {
      boxSizing: "border-box",
      transition: "all 0.4s"
    },
    body: {
      display: "flex",
      minHeight: "100vh",
      margin: 0,
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
      fontFamily: "Roboto",
      fontSize: "14px"
    },
    "button, input": {
      fontFamily: "inherit",
      fontSize: "1rem",
      "&:focus": {
        outline: "none"
      }
    },
    input: {
      background: "none",
      border: "none",
      color: theme.inputColor
    },
    "#root": {
      width: "100vw",
      height: "100vh"
    }
  };
}

export function button(theme) {
  return {
    padding: "5px 10px",
    backgroundColor: theme.buttonBackground,
    border: `1px solid ${theme.buttonBorder}`,
    borderRadius: "5px",
    color: theme.buttonColor,
    cursor: "pointer",
    transition: "background 0.4s",
    "&:hover": {
      backgroundColor: theme.buttonBackgroundHover
    }
  };
}
