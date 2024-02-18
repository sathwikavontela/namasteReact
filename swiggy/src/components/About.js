import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Namste react web series</h2>
      <User name="Nikhil" location="Hyderabad" contact="7075748373" />

      {/* <UserClass name="Nikhil" location="Hyderabad" contact="7075748373" /> */}
    </div>
  );
};
export default About;
