import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <Button variant="primary" size="md" onClick={handleLogin}>
      Login
    </Button>
  );
}
export default Login;
