import { Helmet } from "react-helmet";
import { AuthForm } from "../components/AuthForm/AuthForm";

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <AuthForm />
    </div>
  );
};

export default LoginPage;
