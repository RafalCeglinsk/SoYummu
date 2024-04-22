import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/operations";

const formConfig = {
  "/auth/register": {
    fields: ["name", "email", "password"],
    action: register,
    buttonText: "Sign Up",
    linkText: "Sign In",
    linkPath: "/auth/login",
  },
  "/auth/login": {
    fields: ["email", "password"],
    action: login,
    buttonText: "Sign In",
    linkText: "Sign Up",
    linkPath: "/auth/register",
  },
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { fields, action, buttonText, linkText, linkPath } =
    formConfig[location];

  const onSubmit = async (data) => {
    try {
      await dispatch(action(data));
      if (location === "/auth/login") navigate("/main");
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <input
          key={field}
          name={field}
          {...register(field, { required: true })}
          error={errors[field]}
        />
      ))}
      <button type="submit">{buttonText}</button>
      <a href={linkPath}>{linkText}</a>
    </form>
  );
};
