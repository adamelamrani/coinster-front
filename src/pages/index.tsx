import type { NextPage } from "next";
import CardContainer from "../components/CardContainer/CardContainer";
import "whatwg-fetch";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <h1>Coinster</h1>
      <p>Página en desarrollo...</p>
      <CardContainer />
    </>
  );
};

export default Home;
