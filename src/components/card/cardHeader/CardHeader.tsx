import { useEffect } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

type cardHeaderType = {
  pageType: string;
};

const CardHeader = ({ pageType }: cardHeaderType) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <Card.Header>
      <img
        alt="proxiad logo"
        src="https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/244614092_4845511345481692_6023557836348725770_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=welgERBCsL4AX875eoL&_nc_ht=scontent-cdg4-1.xx&oh=00_AfCo7dFVe54Zz5S4LiD-fgJI4mL-M4PVnBCPYT9dflSl9w&oe=64B25E3D"
        width="34px"
        height="34px"
        style={{ borderRadius: "25%" }}
      />
      <Grid.Container
        css={{
          pl: "$6",
          position: "relative",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          marginLeft: "-34px",
        }}
      >
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
            {t(`${pageType}.card.title`)}
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>proxiad.com</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
  );
};

export default CardHeader;
