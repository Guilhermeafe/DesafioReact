import React, { useState, useEffect } from "react";
import Pedido from "../../assets/pedido.svg"
import Trash from "../../assets/trash.svg"
import { useHistory } from "react-router-dom";
import axios from "axios";


import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  Order,
} from "./styles";

function Orders() {
  const [lanch, setLanch] = useState([]);
  const history = useHistory()




  useEffect(() => {
    async function fetchOrders() {
      const { data: newLach } = await axios.get("http://localhost:3001/order");

      setLanch(newLach);
    }
    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    const newLach = lanch.filter(order => order.id !== orderId);
    setLanch(newLach)
  }

  function goBackPage() {
    history.push("/")
  }
  return (
    <Container>

      <Image alt="login-img" src={Pedido} />
      <ContainerItens>

        <H1>Pedidos</H1>





        <ul>
          {lanch.map((order) => (

            <Order key={order.id}>
              <p>{order.order}</p> - <p>{order.clientName}</p>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </Order>

          ))
          }

        </ul>

        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItens>

    </Container>
  );
}

export default Orders