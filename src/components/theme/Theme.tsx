import { Button } from "@nextui-org/react";
import { Moon } from "../../assets/svg/Moon";
import { Sun } from "../../assets/svg/Sun";

type typeTheme = {
  isDarkMode: boolean;
  toggle: () => void;
};

const Theme = ({ isDarkMode, toggle }: typeTheme) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "start-end",
        marginLeft: "25px",
      }}
    >
      <Button
        css={!isDarkMode && { background: "black" }}
        shadow
        size="xs"
        icon={
          isDarkMode ? (
            <Sun fill="currentColor" filled />
          ) : (
            <Moon fill="currentColor" filled />
          )
        }
        onPress={toggle}
      />
    </div>
  );
};

export default Theme;
