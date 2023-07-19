import { Dropdown } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type itemsLanguagesDropdownType = {
  title: string;
  key: string;
};

const DropdownLanguages = () => {
  const [selected, setSelected] = useState<any>(new Set([navigator.language]));

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selected.values().next().value);
  }, [selected]); // eslint-disable-next-line react-hooks/exhaustive-deps

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
          onSelectionChange={setSelected}
          selectedKeys={selected}
          disallowEmptySelection
          selectionMode="single"
          color="default"
          variant="shadow"
          aria-label="Actions"
        >
          {itemsLanguagesDropdown.map(
            ({ title, key }: itemsLanguagesDropdownType) => {
              return <Dropdown.Item key={key}>{title}</Dropdown.Item>;
            }
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownLanguages;
