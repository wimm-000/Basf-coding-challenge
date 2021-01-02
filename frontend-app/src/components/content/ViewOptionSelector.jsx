import React, { useEffect, useState } from "react";
import ViewOption from "../common/ViewOption";
import { ReactComponent as TableIcon } from "../../assets/images/table.svg";
import { ReactComponent as ListIcon } from "../../assets/images/list.svg";
import { useLocation } from "react-router-dom";

const ViewOptionSelector = () => {
  const [selectedItem, setSelectedItem] = useState("list");
  const location = useLocation();

  useEffect(() => {
    const currentLocation = location.pathname !== "/table" ? "list" : "table";
    setSelectedItem(currentLocation);
  }, [location]);

  return (
    <ul className="view-option-selector">
      <li>
        <ViewOption
          isSelected={selectedItem === "table"}
          Icon={TableIcon}
          route="table"
        >
          Table view
        </ViewOption>
      </li>
      <li>
        <ViewOption
          isSelected={selectedItem === "list"}
          Icon={ListIcon}
          route="list"
        >
          List view
        </ViewOption>
      </li>
    </ul>
  );
};

export default ViewOptionSelector;
