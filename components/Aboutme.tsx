import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Farhan" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
         I am also proficient in using tools such as Webpack, npm,
          and Git for development and deployment. In addition to my technical
          
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
