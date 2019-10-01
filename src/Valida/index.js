import React from 'react';
import { Container } from './styles';
import Card from 'react-bootstrap/Card';
const initialState = {ip: "", valido: "", classe: "", mascara: "", endRede: "", endIniRede: "", endFimRede: "", endBroad: "", resLAN: "", ipBin: ""}

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
    let octetos = ips.split(".");
    let oct1 = octetos[0], oct2 = octetos[1], oct3 = octetos[2], oct4 = octetos[3];
    let valido = "", classe = "", mascara = "", endRede = "", endIniRede = "", endFimRede = "", endBroad = "", resLAN = "", ipBin = "";
    
    if (octetos.length <= 3 || oct1 > 255 || oct2 > 255 || oct3 > 255 || oct4 > 255) { 
      classe = "IP Inválido!";
      valido = "IP Inválido!";
      mascara = "IP Inválido!";
      endRede = "IP Inválido!";
      endIniRede = "IP Inválido!";
      endFimRede = "IP Inválido!";
      endBroad = "IP Inválido!";
      resLAN = "IP Inválido!";
      ipBin = "IP Inválido!";
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
        ipBin = parseInt(oct1).toString(2) + "." + parseInt(oct2).toString(2) + "." + parseInt(oct3).toString(2) + "." + parseInt(oct4).toString(2);
      } else if (oct1 >= 128 && oct1 <= 191) {
        classe = "Classe B";
        valido = "IP Válido!";
        mascara = "255.255.0.0";
        endRede = oct1 + "." + oct2 + ".0.0";
        endIniRede = oct1 + "." + oct2 + ".0.1";
        endFimRede = oct1 + "." + oct2 + ".255.254";
        endBroad = oct1 + "." + oct2 + ".255.255";
        resLAN = "172.16.0.1";
        ipBin = parseInt(oct1).toString(2) + "." + parseInt(oct2).toString(2) + "." + parseInt(oct3).toString(2) + "." + parseInt(oct4).toString(2);
      } else if(oct1 >= 192 && oct1 <= 223) {
        classe = "Classe C";
        valido = "IP Válido!";
        mascara = "255.255.255.0";
        endRede = oct1 + "." + oct2 + "." + oct3 + ".0";
        endIniRede = oct1 + "." + oct2 + "." + oct3 + ".1";
        endFimRede = oct1 + "." + oct2 + "." + oct3 + ".254";
        endBroad = oct1 + "." + oct2 + "." + oct3 + ".255";
        resLAN = "192.168.0.0";
        ipBin = parseInt(oct1).toString(2) + "." + parseInt(oct2).toString(2) + "." + parseInt(oct3).toString(2) + "." + parseInt(oct4).toString(2);
      } else if(oct1 >= 224 && oct1 <= 239) {
        classe = "Classe D";
        valido = "IP Válido!";
        mascara = "Utilizado para tráfego Multicast";
        endRede = " - - - - ";
        endIniRede = " - - - - ";
        endFimRede = " - - - - ";
        endBroad = " - - - - ";
        resLAN = " - - - - ";
        ipBin = parseInt(oct1).toString(2) + "." + parseInt(oct2).toString(2) + "." + parseInt(oct3).toString(2) + "." + parseInt(oct4).toString(2);
      } else if(oct1 >= 240 && oct1 <= 254) {
        classe = "Classe E";
        valido = "IP Válido!";
        mascara = "Reservado para uso futuro e testes"
        endRede = " - - - - ";
        endIniRede = " - - - - ";
        endFimRede = " - - - - ";
        endBroad = " - - - - ";
        resLAN = " - - - - ";
        ipBin = parseInt(oct1).toString(2) + "." + parseInt(oct2).toString(2) + "." + parseInt(oct3).toString(2) + "." + parseInt(oct4).toString(2);
      } else {
        classe = "IP Inválido!";
        valido = "IP Inválido!";
        mascara = "IP Inválido!";
        endRede = "IP Inválido!";
        endIniRede = "IP Inválido!";
        endFimRede = "IP Inválido!";
        endBroad = "IP Inválido!";
        resLAN = "IP Inválido!";
        ipBin = "IP Inválido!";
      }
    }
    
    if(classe || valido || mascara || endRede || endIniRede || endFimRede || endBroad || resLAN || ipBin){
      this.setState({classe, valido, mascara, endRede, endIniRede, endFimRede, endBroad, resLAN, ipBin})
      return false
    }
    return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
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
              <input id="ip" name="ip" placeholder="(Ex: 192.168.254.6)" value={this.state.ip} onChange={this.handleChange}/>
            </div>
            <button type="submit">Validar</button>
          </form>
          <Card className="card text-center">
            <Card.Header>Dados - IP</Card.Header>
            <Card.Body>
              <Card.Text className="text-left">IP: {this.state.ip}</Card.Text>
              <Card.Text className="text-left">Válido? {this.state.valido}</Card.Text>
              <Card.Text className="text-left">Classe: {this.state.classe}</Card.Text>
              <Card.Text className="text-left">Máscara: {this.state.mascara}</Card.Text>
              <Card.Text className="text-left">Endereço de Rede: {this.state.endRede}</Card.Text>
              <Card.Text className="text-left">Endereço Inicial Utilizável da Rede: {this.state.endIniRede}</Card.Text>
              <Card.Text className="text-left">Endereço Final Utilizável da Rede: {this.state.endFimRede}</Card.Text>
              <Card.Text className="text-left">Endereço Broadcast: {this.state.endBroad}</Card.Text>
              <Card.Text className="text-left">Endereço LAN Reservado: {this.state.resLAN}</Card.Text>
              <Card.Text className="text-left">Endereço Binário: {this.state.ipBin}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Developed by Nathalia Cosim :) </Card.Footer>
          </Card>
        </div>
      </Container>
    );
  }
}