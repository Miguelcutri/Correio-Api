import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Local} from './types/local'

function App() {
  const [cep, setCep] = useState<String>("")
  const [local, setLocal] = useState<Local>()

  const getCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => setLocal(resposta.data))
  }
  return (
    <div className="App">
      <input type="text" onChange={(event) => setCep(event.target.value)} />
      <button onClick={getCep}>Buscar por cep</button>
      <h1>Cidade</h1>
       { 
        <>
          
          <p>{local?.bairro}</p>
          <p>{local?.cep}</p>
          <p>{local?.complemento}</p>
          <p>{local?.ddd}</p>
          <p>{local?.gia}</p>
          <p>{local?.ibge}</p>
          <p>{local?.localidade}</p>
          <p>{local?.logradouro}</p>
          <p>{local?.siafi}</p>
          <p>{local?.uf}</p>
           
        </>
      } 
      
    </div>
    
  );
}

export default App;
