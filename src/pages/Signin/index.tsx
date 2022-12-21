import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../context/authContext';

const SigninPage = () => {
  const auth = useAuth();
  const navigage = useNavigate();

  const loginHandle = () => {
    auth.logIn();
  };

  return (
    <div className="container mx-auto">
      <h1>Signin Page</h1>
      <button
        onClick={loginHandle}
        className="bg-red-300 text-white px-1 rounded">
        Signin
      </button>
      <button
        onClick={() => navigage('/signup')}
        className="bg-blue-300 ml-2 text-white px-1 rounded">
        Sign Up
      </button>
    </div>
  );
};
export default SigninPage;
