import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>This is About Page</h1>
      <h1>We use Routes</h1>
      <Link to="/home">Go to Home Pge</Link>
      <br />
      <Link to="/user/zain" state={{ name: "Zain Ishfaq", age: "24" }}>
        Zain
      </Link>
      <br />
      <Link to="/user/usman">Usman</Link>
      <br />
      <Link to="/user/umer">Umer</Link>
    </>
  );
};
export default About;
