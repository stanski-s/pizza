import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
 return (
    <div>
        <h1>Welcome to the Pizza App!</h1>
        <Pizza name="Pepperoni" description="A delicious pizza topped with pepperoni slices." image={"/public/pizzas/pepperoni.webp"} />
        <Pizza name="Hawaiian" description="A classic pizza with tomato sauce, mozzarella cheese, and fresh basil." image={"/public/pizzas/hawaiian.webp"} />
        <Pizza name="Americano" description="A healthy pizza loaded with a variety of fresh vegetables." image={"/public/pizzas/calabrese.webp"} />
    </div>
 )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
