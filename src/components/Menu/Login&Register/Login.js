import { useState } from "react";
import close from "../../img/icon/cancel.png"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { response } from "express";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pswd, setPassword] = useState('');

  const submit = () => {
    const url = "http://localhost/Login.php";

    let fData = new FormData();
    fData.append('email', email);
    fData.append('password', pswd);

    axios.post(url, fData)
    .then(response=> alert(response.data))
    .catch(error=> alert(error));
  }

  return (
    <div className="bg-[#ABC4AA] min-h-screen flex items-center justify-center">
      <form action="login_proses.php" method="post">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 py-2">
            <h1 className="text-2xl font-bold">Login</h1>
            <button onClick={() => navigate('/')} className="px-2 py-1 w-10"><img alt="close" className="hover:opacity-75" src={close}></img></button>
          </div>
          <hr />
          <div className="px-6 py-4">
            <input type="text" placeholder="Email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" name="pswd" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" value={pswd} onChange={(e) => setPassword(e.target.value)}/>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm">Remember</span>
            </label>
            <button type="submit" className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-lg w-full mt-4">Login</button>
            <hr />
            <p className="text-sm">Belum punya akun? <button onClick={() => navigate('../register')} className="text-blue-500 border-none">Daftar Disini</button></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;