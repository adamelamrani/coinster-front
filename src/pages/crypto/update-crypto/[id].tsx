import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateCrypto from "../../../components/CreateCrypto/CreateCrypto";
import Crypto from "../../../interfaces/Crypto";
import { RootStateSingle } from "../../../interfaces/RootState";
import { wrapper } from "../../../redux/store/store";
import {
  singleCryptoThunk,
  updateCryptoThunk,
} from "../../../redux/thunks/cryptoThunks";
import { cryptoToUpdate } from "../../../utils/formFields";

const UpdateCrypto = (): JSX.Element => {
  const crypto = useSelector<RootStateSingle, any>(
    (state) => state.singleCrypto
  );

  const image: any = {
    imageDefault: "",
  };

  const [formData, setFormData] = useState(cryptoToUpdate({ crypto }));

  const [imgData, setImgData] = useState(image);
  const createCryptoEvent = (event: {
    target: { id: string; value: string };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFileData: any = event.target.files;
    setFormData({ ...formData, img: imageFileData[0] });

    const reader = new FileReader();
    reader.onload = async () => {
      if (reader.readyState === 2) {
        await setImgData({ ...imgData, imageDefault: reader.result });
      }
    };

    if (imageFileData[0]) {
      await reader.readAsDataURL(imageFileData[0]);
    }
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const submitCrypto = (event: any) => {
    event.preventDefault();
    const cryptoUpdated: Crypto = formData;
    dispatch(updateCryptoThunk(crypto.id as string, cryptoUpdated));

    setTimeout(() => {
      router.push("/");
    }, 1300);
  };

  return (
    <CreateCrypto
      changeFile={changeFile}
      createCryptoEvent={createCryptoEvent}
      formData={formData}
      submitCrypto={submitCrypto}
      text="Actualizar"
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
