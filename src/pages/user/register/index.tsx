import { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import { registerThunk } from "../../../redux/thunks/userThunks";

const RegisterPage: React.ReactNode = (): JSX.Element => {
  const dispatch = useDispatch();
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
  };

  return (
    <RegisterForm
      formData={formData}
      handleChange={handleChange}
      submitForm={submitForm}
    />
  );
};

export default RegisterPage;
