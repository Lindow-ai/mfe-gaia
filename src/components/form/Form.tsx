import {
  Card,
  Grid,
  Text,
  Link,
  Input,
  Row,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { Password } from "../../assets/svg/Password";
import { Mail } from "../../assets/svg/Mail";

const Form = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <img
            alt="nextui logo"
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
                Connexion
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>proxiad.com</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Input
            css={{ marginBottom: "$9" }}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Matricule"
          />
          <Input
            css={{ marginBottom: "$9" }}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input.Password
            css={{ marginBottom: "$9" }}
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Mot de passe"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Se souvenir</Text>
            </Checkbox>
            <Text size={14}>Mot de passe oublier ?</Text>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button auto flat>
            Connexion
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Form;
