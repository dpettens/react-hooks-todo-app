import React from "react";
import withStyles from "react-jss";

import { visibilityFilters } from "../../hooks/useVisibilityFilter";
import styles from "./styles";

function VisibilityControls({ classes, setVisibilityFilter }) {
  return (
    <div className={classes.buttonsContainer}>
      <button
        className={classes.allButton}
        onClick={() => setVisibilityFilter(visibilityFilters.SHOW_ALL)}
      >
        All
      </button>
      <button
        className={classes.activeButton}
        onClick={() => setVisibilityFilter(visibilityFilters.SHOW_ACTIVE)}
      >
        Active
      </button>
      <button
        className={classes.completedButton}
        onClick={() => setVisibilityFilter(visibilityFilters.SHOW_COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
}

export default withStyles(styles)(VisibilityControls);
