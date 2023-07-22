import { Card, Grid, Text } from "@nextui-org/react";

type cardHeaderType = {
  title: string;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  css?: any;
  cssTitle?: any;
};

const CardHeader = ({ title, children, css, cssTitle }: cardHeaderType) => {
  return (
    <Card.Header>
      <Grid.Container css={css}>
        <Grid xs={12}>
          <Text h4 css={cssTitle}>
            {title}
          </Text>
        </Grid>
        <Grid xs={12}>{children}</Grid>
      </Grid.Container>
    </Card.Header>
  );
};

export default CardHeader;
