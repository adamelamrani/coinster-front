import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import Crypto from "../../interfaces/Crypto";
import { RootStateSingle } from "../../interfaces/RootState";
import { wrapper } from "../../redux/store/store";
import { singleCryptoThunk } from "../../redux/thunks/cryptoThunks";

const DetailsPage = (): JSX.Element => {
  const crypto: Crypto = useSelector<RootStateSingle, any>(
    (state) => state.singleCrypto
  );

  return <CryptoDetails crypto={crypto} actionOnClick={() => {}} />;
};

export const getAllPostIds = async (context?: GetStaticPropsContext) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/list`,
    {
      method: "GET",
    }
  );
  debugger;
  const posts = await res.json();
  debugger;
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
        debugger;
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
