import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import Crypto, { CryptoId } from "../../interfaces/Crypto";
import { RootStateSingle } from "../../interfaces/RootState";
import { wrapper } from "../../redux/store/store";
import {
  deleteCryptoThunk,
  singleCryptoThunk,
} from "../../redux/thunks/cryptoThunks";
import FourOFour from "../404";

const DetailsPage = (): JSX.Element => {
  const crypto: Crypto = useSelector<RootStateSingle, any>(
    (state) => state.singleCrypto
  );

  const router = useRouter();

  const dispatch = useDispatch();
  const deleteCrypto = (id: string) => {
    dispatch(deleteCryptoThunk(id));
    router.push("/");
  };
  if (router.isFallback) {
    return <FourOFour />;
  }

  return (
    <CryptoDetails
      crypto={crypto}
      actionOnClick={() => {}}
      updateCrypto={() => router.push(`/crypto/update-crypto/${crypto.id}`)}
      deleteCrypto={() => deleteCrypto((crypto as CryptoId).id)}
    />
  );
};

export const getAllPostIds = async (context?: GetStaticPropsContext) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`,
    {
      method: "GET",
    }
  );
  const posts = await res.json();
  return posts.map((post: any) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const dynamicIds = await getAllPostIds();
  return {
    paths: dynamicIds,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store): any =>
    async (context: GetStaticPropsContext) => {
      const id = context.params?.id;
      try {
        await store.dispatch<any>(singleCryptoThunk(id as string));
        return {
          revalidate: 1,
          props: { id },
        };
      } catch (error) {
        return {
          notFound: true,
        };
      }
    }
);

export default DetailsPage;
