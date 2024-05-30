import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";

import { login, register as registerAction } from "../../redux/auth/operations";
import {
  Form,
  Flex,
  Logo,
  Desktop,
  Container,
  StyledLabel,
  StyledInput,
  FormButton,
  H2,
  StyledLink,
  Background,
} from "./AuthForm.styled";
import { validationRules } from "../../utils/authValidation";

const formConfig = {
  "/auth/register": {
    fields: ["Name", "Email", "Password"],
    action: registerAction,
    headerText: "Registration",
    buttonText: "Sign Up",
    linkText: "Sign In",
    linkPath: "/auth/login",
  },
  "/auth/login": {
    fields: ["Email", "Password"],
    action: login,
    headerText: "Sign In",
    buttonText: "Sign In",
    linkText: "Sign Up",
    linkPath: "/auth/register",
  },
};

export const AuthForm = () => {
  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { fields, buttonText, linkText, linkPath, headerText } =
    formConfig[location];

  const onSubmit = async (e) => {
    if (location === "/auth/register") {
      dispatch(
        registerAction({ name: e.Name, email: e.Email, password: e.Password })
      );
      navigate("/auth/login");
    } else {
      dispatch(login({ email: e.Email, password: e.Password }));
    }
  };

  const onError = (errors) => {
    Object.keys(errors).forEach((field) => {
      if (errors[field]) {
        Notiflix.Notify.failure(errors[field].message);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Flex>
        <Logo />
        <Desktop>
          <Container>
            <H2>{headerText}</H2>
            <StyledLabel>
              {fields.map((field) => (
                <div key={field}>
                  <StyledInput
                    key={field}
                    name={field}
                    autoComplete="off"
                    {...registerField(field, validationRules[field])}
                    placeholder={field}
                    type={field === "Password" ? "password" : "text"}
                  />
                </div>
              ))}
            </StyledLabel>
            <FormButton type="submit">{buttonText}</FormButton>
          </Container>
          <StyledLink to={linkPath}>{linkText}</StyledLink>
        </Desktop>
        <Background />
      </Flex>
    </Form>
  );
};
