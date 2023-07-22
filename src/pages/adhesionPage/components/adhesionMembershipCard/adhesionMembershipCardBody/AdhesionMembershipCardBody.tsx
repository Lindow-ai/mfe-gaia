import CardBody from "../../../../../components/card/cardBody";
import { useTranslation } from "react-i18next";

type AdhesionMembershipCardBody = {
  pageType: string;
};

const AdhesionMembershipCardBody = ({
  pageType,
}: AdhesionMembershipCardBody) => {
  const { t } = useTranslation();

  const itemsCardBody: string[] = t(`${pageType}.card.cardBody.items`, {
    returnObjects: true,
  });

  return (
    <CardBody cssBody={{ py: "$2", marginLeft: "15px" }}>
      <ul>
        {itemsCardBody.map((item, i) => {
          return <li key={i}>{item}:</li>;
        })}
      </ul>
    </CardBody>
  );
};

export default AdhesionMembershipCardBody;
