import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useSelector } from "react-redux";
import CreateCrypto from "../../../components/CreateCrypto/CreateCrypto";
import { RootStateSingle } from "../../../interfaces/RootState";
import { wrapper } from "../../../redux/store/store";
import { singleCryptoThunk } from "../../../redux/thunks/cryptoThunks";

const UpdateCrypto: React.ReactNode = (): JSX.Element => {
  const crypto = useSelector<RootStateSingle, any>(
    (state) => state.singleCrypto
  );

  return <CreateCrypto crypto={crypto} />;
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
          revalidate: 10,
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
