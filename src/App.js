import React, { useState } from 'react';
import './App.css';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-east-2_n3M3PlkvS',
    ClientId: '22sb38t71saqnb4bk9ouqju9rj'
  };

  const userPool = new CognitoUserPool(poolData);

  const handleSubmit = (e) => {
    e.preventDefault();
    userPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
