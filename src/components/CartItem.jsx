import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../hooks/ShoppingCartContext";

const storeItems = [
  {
    id: 1,
    name: "Abacaxi",
    imgUrl: "/imgs/Abacaxi.png",
  },
  {
    id: 2,
    name: "Kiwi",
    imgUrl: "/imgs/Kiwi.png",
  },
  {
    id: 3,
    name: "Laranja",
    imgUrl: "/imgs/Laranja.png",
  },
  {
    id: 4,
    name: "Maca",
    imgUrl: "/imgs/Maca.png",
  },
];


const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
 
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img 
        src={item.imgUrl} 
        style={{width: "125px", height: "75px", objectFit: "contain"}}
      />

      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quanity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
      </div>
      <Button
        vaiant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export { storeItems, CartItem };
