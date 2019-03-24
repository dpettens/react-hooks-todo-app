import { useState } from "react";

export const visibilityFilters = {
  SHOW_ALL: "all",
  SHOW_ACTIVE: "active",
  SHOW_COMPLETED: "completed"
};

export default function useVisibilityFilter(
  intialFilter = visibilityFilters.SHOW_ALL
) {
  const [filter, setFilter] = useState(intialFilter);

  function setVisibilityFilter(filter) {
    if (
      filter !== visibilityFilters.SHOW_ALL &&
      filter !== visibilityFilters.SHOW_ACTIVE &&
      filter !== visibilityFilters.SHOW_COMPLETED
    ) {
      throw new Error("Unknown filter: " + filter);
    } else {
      setFilter(filter);
    }
  }

  return [filter, setVisibilityFilter];
}
