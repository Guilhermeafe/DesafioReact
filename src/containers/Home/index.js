import React, { useState, useRef } from "react";
import Login from "../../assets/login.svg"
import { useHistory } from "react-router-dom";
import axios from "axios";


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,

} from "./styles";

function App() {
  const [lanch, setLanch] = useState([]);
  const history = useHistory()

  const inputPedido = useRef();
  const inputNome = useRef();

  async function addNewLanch() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", 
    {
      order: inputPedido.current.value,
      clientName: inputNome.current.value
    });


    setLanch([...lanch, newOrder]);

    history.push("/orders")
  }





  return (
    <Container>

      <Image alt="login-img" src={Login} />
      <ContainerItens>

        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder="Pedido" />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputNome} placeholder="Nome" />

        <Button onClick={addNewLanch}>Novo Pedido</Button>



      </ContainerItens>

    </Container>
  );
}

export default App