import "./styles.css";
import { Card, Alert } from "dribbble-design-system-2";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="centered-div">
          <h1>Card Component</h1>
          <Card
            alt="image-test-alt"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
            title="Card Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />

          <h1>Alert Component</h1>
          <Alert
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
          <Alert
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
        </div>
      </div>
    </div>
  );
}
