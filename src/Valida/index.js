import React from 'react';
import { Container } from './styles';

const initialState = {
  ip: "",
  valido: "",
  classe: "",
  mascara: "",
  funcMascara: "",
  endRede: "",
  endIniRede: "",
  endFimRede: "",
  endBroad: "",
  resLAN: "",
  ipBin: ""
};

export default class Valida extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let ips = this.state.ip;
    let octetos = ips.split(".")
    let valido = "";
    let classe = "";
    let mascara = "";
    let endRede = "";
    let endIniRede = "";
    let endFimRede= "";
    let endBroad = "";
    let resLAN = "";

    let oct1 = octetos[0];
    let oct2 = octetos[1];
    let oct3 = octetos[2];
    let oct4 = octetos[3];

    if (octetos.length <= 3 || oct1 > 255 || oct2 > 255 || oct3 > 255 || oct4 > 255) { 
      classe = "IP Inválido!";
      valido = "IP Inválido!";
      mascara = "IP Inválido!";
      endRede = "IP Inválido!";
      endIniRede = "IP Inválido!";
      endFimRede = "IP Inválido!";
      endBroad = "IP Inválido!";
      resLAN = "IP Inválido!";
    } else {
      if (oct1 > 0 && oct1 <= 126) {
        classe = "Classe A";
        valido = "IP Válido!";
        mascara = "255.0.0.0";
        endRede = oct1 + ".0.0.0";
        endIniRede = oct1 + ".0.0.1";
        endFimRede = oct1 + ".255.255.254";
        endBroad = oct1 + ".255.255.255";
        resLAN = "10.0.0.0";
      } else if (oct1 >= 128 && oct1 <= 191) {
        classe = "Classe B";
        valido = "IP Válido!";
        mascara = "255.255.0.0";
        endRede = oct1 + "." + oct2 + ".0.0";
        endIniRede = oct1 + "." + oct2 + ".0.1";
        endFimRede = oct1 + "." + oct2 + ".255.254";
        endBroad = oct1 + "." + oct2 + ".255.255";
        resLAN = "172.16.0.1";
      } else if(oct1 >= 192 && oct1 <= 223) {
        classe = "Classe C";
        valido = "IP Válido!";
        mascara = "255.255.255.0";
        endRede = oct1 + "." + oct2 + "." + oct3 + ".0";
        endIniRede = oct1 + "." + oct2 + "." + oct3 + ".1";
        endFimRede = oct1 + "." + oct2 + "." + oct3 + ".254";
        endBroad = oct1 + "." + oct2 + "." + oct3 + ".255";
        resLAN = "192.168.0.0";
      } else if(oct1 >= 224 && oct1 <= 239) {
        classe = "Classe D";
        valido = "IP Válido!";
        mascara = "Utilizado para tráfego Multicast";
        endRede = " - - - - ";
        endIniRede = " - - - - ";
        endFimRede = " - - - - ";
        endBroad = " - - - - ";
        resLAN = " - - - - ";
      } else if(oct1 >= 240 && oct1 <= 254) {
        classe = "Classe E";
        valido = "IP Válido!";
        mascara = "Reservado para uso futuro e testes"
        endRede = " - - - - ";
        endIniRede = " - - - - ";
        endFimRede = " - - - - ";
        endBroad = " - - - - ";
        resLAN = " - - - - ";
      } else {
        classe = "IP Inválido!";
        valido = "IP Inválido!";
        mascara = "IP Inválido!";
        endRede = "IP Inválido!";
        endIniRede = "IP Inválido!";
        endFimRede = "IP Inválido!";
        endBroad = "IP Inválido!";
        resLAN = "IP Inválido!";
      }
    }

    if(classe || valido || mascara || endRede || endIniRede || endFimRede || endBroad || resLAN){
      this.setState({classe, valido, mascara, endRede, endIniRede, endFimRede, endBroad, resLAN})
      return false
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <Container>
        <div className="login-container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="ip">Insira o IP: </label>
              <input
                id="ip"
                name="ip"
                placeholder="(Ex: 192.168.254.6)"
                value={this.state.ip}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Validar</button>
          </form>

          <div className="result">
            <strong> IP: {this.state.ip} </strong>
            <strong> É válido?  {this.state.valido} </strong>
            <strong> Classe: {this.state.classe} </strong>  
            <strong> Mascara: {this.state.mascara} </strong>  
            <strong> Endereço de rede: {this.state.endRede} </strong>
            <strong> Endereço Inicial utilizável da Rede: {this.state.endIniRede} </strong>
            <strong> Endereço Final utilizável da Rede: {this.state.endFimRede} </strong>
            <strong> Endereço Broadcast: {this.state.endBroad} </strong>
            <strong> Endereço LAN reservado: {this.state.resLAN} </strong>
          </div>
        </div>
      </Container>
    );
  }
}
