import { Dropdown } from "@nextui-org/react";
import { Labels } from "../../utils/constants/Labels";
import { item } from "../../interfaces/label.type";
import { ENGLISH } from "../../utils/constants/Languages";

type dropdownMenuType = {
  pageType: string;
};

const DropdownMenu = ({ pageType }: dropdownMenuType) => {
  return (
    <Dropdown>
      <Dropdown.Button color="default" shadow>
        {Labels[pageType].languages.french.dropdown.title}
      </Dropdown.Button>
      <Dropdown.Menu color="default" variant="shadow" aria-label="Actions">
        {Labels[pageType].languages.french.dropdown.items.map(
          ({ item, key }: item) => {
            return <Dropdown.Item key={key}>{item}</Dropdown.Item>;
          }
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
