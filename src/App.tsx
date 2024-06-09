import "./App.css";
import image from "../src/assets/image.png";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="qr">
          <img src={image} alt="qr-code" />
        </div>
        <div className="text">
          <div className="custom-font title">
            Improve your front-end skills by building projects
          </div>
          <div className="custom-font sub-title">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
