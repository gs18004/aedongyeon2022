import "./page.styles.scss";
import { Link, useParams } from "react-router-dom";
const Pg3 = () => {
  const { mbtiName } = useParams();
  const link = `/result/${mbtiName}`;
  return (
    <Link to={link}>
      <div className="page5"></div>
    </Link>
  );
};
export default Pg3;
