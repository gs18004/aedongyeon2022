import { Link } from "react-router-dom";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-buttons-container">
        <Link to="/1">
          <button className="button-start">START</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
