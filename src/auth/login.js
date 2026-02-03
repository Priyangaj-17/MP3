
import { useNavigate } from 'react-router-dom';
import "./login.css"

function Login() {
  const navigate = useNavigate();
  return (
    <div className='login-screen'>
      <div className='login-container'>
      <h1 className='heading'>Dotify</h1>
      <button className='login-button' onClick={() => navigate("/library")}>Click to Login</button>
      </div>
    </div>
  )
}

export default Login