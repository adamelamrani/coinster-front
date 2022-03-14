import type { NextPage } from "next";
import CardContainer from "../components/CardContainer/CardContainer";
import "whatwg-fetch";
import { wrapper } from "../redux/store/store";
import { loadCoinListThunk } from "../redux/thunks/cryptoThunks";

const Home: NextPage = () => {
  return (
    <>
      <h1>Coinster</h1>
      <p>Página en desarrollo...</p>
      <CardContainer />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(loadCoinListThunk());
    return { props: {} };
  }
);

export default Home;
