import { Dropdown } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type DropdownLanguagesType = {
  defaultValue: string;
};

const DropdownLanguages = ({ defaultValue }: DropdownLanguagesType) => {
  const [selected, setSelected] = useState<any>(new Set([defaultValue]));

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const itemsLanguagesDropdown: Object[] = t(`dropdownLanguage.items`, {
    returnObjects: true,
  });

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
          {t(`dropdownLanguage.title`)}
        </Dropdown.Button>
        <Dropdown.Menu
          // onSelectionChange={setSelected}
          // selectedKeys={selected}
          disallowEmptySelection
          selectionMode="single"
          color="default"
          variant="shadow"
          aria-label="Actions"
        >
          {itemsLanguagesDropdown.map((item, i) => {
            return <Dropdown.Item key={i}>{item}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownLanguages;
