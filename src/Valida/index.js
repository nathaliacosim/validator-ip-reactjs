import React, { useState } from 'react';
import { Container } from './styles';

export default function Valida() {
  const [ip, setIp] = useState('');
  let val = useState('');
  let classe = useState('gi');

  function handleSubmit(e){
    e.preventDefault();
    console.log(ip);
  }
 
  function valida(){
    const octetos = ip.split(".");
    if(octetos.length <= 3) console.log('Inválido');
    else {
      const oct1 = octetos[0];
      if(oct1 > 0 && oct1 <= 126) {
        val = "Valido" 
        classe = "A"
      } 
      else if(oct1 >= 128 && oct1 <= 191) console.log("Classe B")
      else if(oct1 >= 192 && oct1 <= 223) console.log("Classe C")
      else if(oct1 >= 224 && oct1 <= 239) console.log("Classe D")
      else if(oct1 >= 240 && oct1 <= 254) console.log("Classe E")
      else console.log("Inválido!")
    }
  }



  return (
    <Container>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Insira o IP (Ex: 192.168.254.6)"
            value={ip}
            onChange={e => setIp(e.target.value)}
          />
          <button type="submit" onClick={valida}>Validar</button>
         </form>
      </div>
      <div className="login-container">
        <h2>Status</h2>
        <p>{val}</p>
        <p>{classe}</p>
      </div>
    </Container>
  );
}
