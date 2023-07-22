import { useState } from "react";
import { Input } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Location } from "react-iconly";

import CardBody from "../../../../../components/card/cardBody";
import Form from "../../../../../components/form";
import SearchInput from "../../../../../components/searchInput";

type adhesionMembershipDetailCardBodyType = {
  pageType: string;
};

const AdhesionMembershipDetailCardBody = ({
  pageType,
}: adhesionMembershipDetailCardBodyType) => {
  const { t } = useTranslation();

  const itemsFormTexts: string[] = t(
    `${pageType}.card.cardBody.form.inputType.itemsText`,
    {
      returnObjects: true,
    }
  );

  const itemsFormSearch: string[] = t(
    `${pageType}.card.cardBody.form.inputType.search`,
    {
      returnObjects: true,
    }
  );

  return (
    <CardBody cssBody={{ py: "$2" }}>
      <Form>
        <div>
          {itemsFormTexts.map((item, i) => {
            return (
              <Input
                key={i}
                css={{ marginBottom: "$9" }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder={item}
              />
            );
          })}
          {itemsFormSearch.map((item, i) => {
            return (
              <SearchInput
                key={i}
                search={item}
                icon={<Location set="light" />}
              />
            );
          })}
        </div>
      </Form>
    </CardBody>
  );
};

export default AdhesionMembershipDetailCardBody;
