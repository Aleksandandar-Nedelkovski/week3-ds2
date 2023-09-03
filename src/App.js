import "./styles.css";
import { Card } from "dribbble-design-system-2";

export default function App() {
  return (
    <div className="App">
      <h1>Card Component</h1>
      <Card
        alt="image-test-alt"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
        title="Card Title"
        desctiption="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
    </div>
  );
}
