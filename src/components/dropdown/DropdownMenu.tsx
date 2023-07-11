import { Dropdown } from "@nextui-org/react";
import { Labels } from "../../utils/constants/Labels";
import { item } from "../../interfaces/label.type";
import { useState } from "react";

type dropdownMenuType = {
  pageType: string;
  defaultValue: string;
};

const DropdownMenu = ({ pageType, defaultValue }: dropdownMenuType) => {
  const [selected, setSelected] = useState<any>(new Set([defaultValue]));

  return (
    <Dropdown>
      <Dropdown.Button color="default" shadow>
        {
          Labels[pageType].languages[selected.values().next().value].dropdown
            .title
        }
      </Dropdown.Button>
      <Dropdown.Menu
        onSelectionChange={setSelected}
        selectedKeys={selected}
        disallowEmptySelection
        selectionMode="single"
        color="default"
        variant="shadow"
        aria-label="Actions"
      >
        {Labels[pageType].languages[
          selected.values().next().value
        ].dropdown.items.map(({ item, key }: item) => {
          return (
            <Dropdown.Item textValue={selected} key={key}>
              {item}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
