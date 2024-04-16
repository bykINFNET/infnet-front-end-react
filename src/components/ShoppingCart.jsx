import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../hooks/ShoppingCartContext";
import { storeItems, CartItem } from "./CartItem";

const ShoppingCart = () => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas>

      <Offcanvas.Header closeButton>
      
        <Offcanvas.Title>Cart</Offcanvas.Title>
      
      </Offcanvas.Header>

      <Offcanvas.Body>
      
        <Stack gap={3}>
      
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
      
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
      
            {cartItems.reduce((total, cartItem) => {
              
              const item = storeItems.find((i) => i.id === cartItem.id);
              
              return total + cartItems.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
