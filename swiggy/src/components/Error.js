import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError;
  console.log(err);
  return (
    <div className="error-container">
      <h1>OOPS!</h1>
      <h2>you have an error</h2>
    </div>
  );
};
export default Error;
