import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CreateCrypto from "../../../components/CreateCrypto/CreateCrypto";
import { createCryptoThunk } from "../../../redux/thunks/cryptoThunks";
import { emptyForm } from "../../../utils/formFields";

const CreateCryptoForm = () => {
  const image: any = {
    imageDefault: "",
  };

  const [formData, setFormData] = useState(emptyForm);

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

    dispatch(createCryptoThunk(formData));

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
      text="Crear"
    />
  );
};
export default CreateCryptoForm;
