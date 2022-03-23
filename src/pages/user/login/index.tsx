import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../../components/LoginForm/LoginForm";
import { loginThunk } from "../../../redux/thunks/userThunks";

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const blankFields = {
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
    dispatch(loginThunk(formData));
  };

  return (
    <LoginForm
      formData={formData}
      handleChange={handleChange}
      submitForm={submitForm}
    />
  );
};

export default LoginPage;
