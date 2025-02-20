import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLogedin }) {
  return (
    <Template
      title="Join us today! Sign up now to unlock exclusive offers."
      desc1="Shop the latest trends at unbeatable prices! Discover exclusive deals on top-quality products."
      desc2="Unlock the best deals and tailor-made recommendations—sign up and start saving today!"
      image={signupImg}
      formtype="signup"
      setIsLogedin={setIsLogedin}
    />
  );
}

export default Signup;
