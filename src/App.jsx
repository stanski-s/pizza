import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
 return (
    <div>
        <h1>Welcome to the Pizza App!</h1>
        <Pizza name="Pepperoni" description="A delicious pizza topped with pepperoni slices." />
        <Pizza name="Margherita" description="A classic pizza with tomato sauce, mozzarella cheese, and fresh basil." />
        <Pizza name="Veggie" description="A healthy pizza loaded with a variety of fresh vegetables." />
    </div>
 )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
