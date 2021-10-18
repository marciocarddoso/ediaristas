import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/safeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Márcio Cardoso"}
        picture={"https://github.com/marciocarddoso.png"}
        rating={4}
        description={"Cuiabá"}
      />
    </div>
  );
};

export default Home;
