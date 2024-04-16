import { Container } from "react-bootstrap";
import RoutesApp from "./routes/RoutesApp";
import { AuthProvider } from "./hooks/AuthContext";
import { ShoppingCartProvider } from "./hooks/ShoppingCartContext";

function App() {
  return (
    <AuthProvider>

      <ShoppingCartProvider>

        <Container className="mb-4">

          <RoutesApp />

        </Container>
      
      </ShoppingCartProvider>
    
    </AuthProvider>
  );
}

export default App;
