import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<ExperienceCard
          title="Evola Labs"
          subTitle="WordPress Designer 2020 - Present"
          icon={<SiFiverr />}
        />
        <ExperienceCard
  title="Meta World"
  subTitle="WordPress Designer 2019 - 2021"
  icon={<img src="https://i.ibb.co/Tq0mjmSj" alt="Meta World Logo" style={{ width: 40, height: 40 }} />}
/>

        <ExperienceCard
          title="Fiverr"
          subTitle="Web Developer 2018 - 2023"
          icon={<SiFiverr />}
        />
        
        <ExperienceCard
          title="UpWork"
          subTitle="Website Developer 2019 - 2021"
          icon={<SiUpwork />}
        />

        
      </div>
    </div>
  );
};

export default Experience;
