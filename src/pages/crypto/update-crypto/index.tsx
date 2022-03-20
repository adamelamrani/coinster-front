import { GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import CreateCrypto from "../../../components/CreateCrypto/CreateCrypto";
import { RootStateSingle } from "../../../interfaces/RootState";
import { wrapper } from "../../../redux/store/store";
import { singleCryptoThunk } from "../../../redux/thunks/cryptoThunks";

const UpdateCrypto = (): JSX.Element => {
  debugger;
  const crypto = useSelector<RootStateSingle, any>(
    (state) => state.singleCrypto
  );

  return <CreateCrypto crypto={crypto} />;
};

export const getStaticProps = wrapper.getStaticProps(
  (store): any =>
    async (context: GetStaticPropsContext) => {
      debugger;
      const id = context.params?.id;
      try {
        await store.dispatch<any>(singleCryptoThunk(id as string));
        return {
          props: { id },
        };
      } catch (error) {
        return {
          notFound: true,
        };
      }
    }
);
export default UpdateCrypto;
