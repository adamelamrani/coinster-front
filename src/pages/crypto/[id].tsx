import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import Crypto from "../../interfaces/Crypto";
import { RootStateSingle } from "../../interfaces/RootState";
import { wrapper } from "../../redux/store/store";
import { singleCryptoThunk } from "../../redux/thunks/cryptoThunks";
interface DetailsProps {
  crypto: Crypto;
}

const DetailsPage = () => {
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
        return { props: { id } };
      } catch (error) {
        return { props: {} };
      }
    }
);

export default DetailsPage;
