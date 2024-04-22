import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login, register } from "../../redux/auth/operations";
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

const formConfig = {
  "/auth/register": {
    fields: ["Name", "Email", "Password"],
    action: register,
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { fields, action, buttonText, linkText, linkPath, headerText } =
    formConfig[location];

  const onSubmit = async (e) => {
    if (location === "/auth/register") {
      dispatch(
        register({ name: e.Name, email: e.Email, password: e.Password })
      );
    } else {
      dispatch(login({ email: e.Email, password: e.Password }));
      navigate("/main");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <Logo />
        <Desktop>
          <Container>
            <H2>{headerText}</H2>
            <StyledLabel>
              {fields.map((field) => (
                <StyledInput
                  key={field}
                  name={field}
                  {...register(field, { required: true })}
                  error={errors[field]}
                  placeholder={field}
                  type={field === "Password" ? "password" : "text"}
                />
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
