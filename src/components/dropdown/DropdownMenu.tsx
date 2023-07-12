import { Dropdown } from "@nextui-org/react";
import { Labels } from "../../utils/constants/Labels";
import { item } from "../../interfaces/item.type";
import { useState } from "react";

type dropdownMenuType = {
  pageType: string;
  defaultValue: string;
};

const DropdownMenu = ({ pageType, defaultValue }: dropdownMenuType) => {
  const [selected, setSelected] = useState<any>(new Set([defaultValue]));

  // div {
  //   width: 100vw;
  //   position: relative;

  //   display: flex;
  //   flex-flow: column wrap;
  //   align-items: center;
  // }

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-end",
        marginTop: "30px",
        marginLeft: "-25px",
      }}
    >
      <Dropdown>
        <Dropdown.Button css={{ width: "7vw" }} color="default" shadow>
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
    </div>
  );
};

export default DropdownMenu;
