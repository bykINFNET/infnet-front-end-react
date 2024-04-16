import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Col, Row, Button } from "react-bootstrap"
import { storeItems } from "../components/CartItem";
import StoreItem from "../components/StoreItem";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>Store</h1>
      <Button className="w-100" onClick={() => [signout(), navigate("/")]}>Sair</Button>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>

  );
};

export default Home;
