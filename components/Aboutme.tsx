import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Farhan" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Hi, I am <strong>Farhan Z.</strong>, a passionate <strong>web developer, WordPress designer, 
          and AI/No-Code expert</strong> with years of experience in building innovative digital solutions. 
          I specialize in <strong>creating dynamic websites, developing No-Code applications, and integrating AI tools</strong> 
          to enhance business efficiency.
        </p>
        <p>
          Beyond development, I have a strong background in <strong>SEO, digital marketing, social media marketing, 
          project management, and team leadership</strong>. My expertise allows me to craft high-performing websites 
          while ensuring they are optimized for search engines and user engagement.
        </p>
        <p>
          With a results-driven approach, I help businesses and individuals <strong>leverage technology to grow, automate 
          processes, and maximize their online presence</strong>. Whether you are looking for a stunning website, 
          a powerful AI-powered tool, or a strategic digital marketing plan, I am here to bring your vision to life.
        </p>
        <p>Lets build something amazing together! 🚀</p>
      </div>
    </div>
  );
};

export default Aboutme;
