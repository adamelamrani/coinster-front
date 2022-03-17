import { GetStaticPaths, GetStaticPropsContext } from "next";
import CryptoDetails from "../../components/CryptoDetails/CryptoDetails";
import Crypto from "../../interfaces/Crypto";
interface DetailsProps {
  crypto: Crypto;
}

const DetailsPage = ({ crypto }: DetailsProps) => {
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const currentCrypto = await fetch(
      `${process.env.NEXT_PUBLIC_COINSTER_API}/cryptos/crypto/${context.params?.id}`,
      {
        method: "GET",
      }
    );
    const crypto: Crypto = await currentCrypto.json();
    if (!crypto) {
      const error = new Error("Crypto not found");
      return { notFound: true };
    }
    return { props: { crypto } };
  } catch (error) {
    return { notFound: true };
  }
};

export default DetailsPage;
