import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navTopage = (url) => {
    navigate(url);
  };
 
 
  return (
    <>
      <h1>This is Home Page</h1>
      <h1>We use Routes</h1>
      <Link to="/about">Go to About Pge</Link>
      <button onClick={() => navTopage("/about")}>Go to About page</button>
      <button onClick={() => navTopage("/filter")}>Go to Filter Page</button>
    </>
  );
};
export default Home;
