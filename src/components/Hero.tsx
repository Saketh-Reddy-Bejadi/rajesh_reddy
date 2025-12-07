import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router";
import ProfileImg from "../assets/profile.png"


const Hero = () => {
  return (
    <div className="w-full h-[85vh] xl:h-[90vh] flex flex-col justify-center items-center gap-2">
      <img
        className="h-[35vh] xl:h-[45dvh]"
        src={ProfileImg}
        alt="rajesh"
      />
      <div className="text-center xl:w-3/5">
        <h1 className="text-xl xl:text-4xl font-semibold">Hi, I'm Rajesh Reddy 👋</h1>
        <p className="xl:text-lg mt-5">
          A motivated <b>DevOps & Cloud Enthusiast</b> with hands-on experience
          in <b>AWS, Terraform, CI/CD, Docker, Kubernetes, and automation</b>. I
          enjoy solving real-world infrastructure challenges and turning ideas
          into <b>scalable cloud solutions</b>. Constantly learning, constantly
          building, and committed to mastering modern DevOps workflows.
        </p>
      </div>
      <div className="flex items-center gap-5 py-2 text-2xl xl:text-3xl">
        <Link to={"https://github.com/BejadiRajeshReddy"} target="_blank">
          <FaGithub/>
        </Link>
        <Link to={"https://discord.com/users/rajeshreddy9526"} target="_blank">
          <FaDiscord/>
        </Link>
        <Link to={"https://x.com/RajeshReddyDEV"} target="_blank">
          <FaXTwitter/>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/rajeshreddybejadi/"}
          target="_blank"
        >
          <FaLinkedin/>
        </Link>
        <Link to={"https://hashnode.com/@BejadiRajeshReddy"} target="_blank">
          <LuLink/>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
