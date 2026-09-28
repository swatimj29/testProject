import { useState } from 'react';

const Login = () => {
const [loginId, setLoginId] = useState('');
const [password, setPassword] = useState('');

const submitData = () => {



if (loginId === 'vpm' && password === 'vpm123') {
  alert('Logged in successfully!');
} else {
  alert('Invalid Login ID or Password!');
}


};

return ( <div className="login-container"> <h1>Login</h1>

```
  <form onSubmit={submitData}>
    <div>
      <label>Login ID:</label>
      <input
        type="text"
        placeholder="Enter your login ID"
        value={loginId}
        onChange={(obj) => setLoginId(obj.target.value)}
      />
    </div>

    <div>
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(obj1) => setPassword(obj1.target.value)}
      />
    </div>

    <button type="submit">Login</button>
  </form>
</div>

);
};

export default Login;
