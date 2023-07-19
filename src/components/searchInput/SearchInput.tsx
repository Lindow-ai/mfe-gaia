import { Input } from "@nextui-org/react";

type searchInputType = {
  search: string;
  icon?: JSX.Element;
};

const SearchInput = ({ search, icon }: searchInputType) => {
  return (
    <Input
      css={{ marginBottom: "$9" }}
      clearable
      bordered
      fullWidth
      color="primary"
      size="lg"
      contentLeft={icon}
      placeholder={search}
    />
  );
};

export default SearchInput;
