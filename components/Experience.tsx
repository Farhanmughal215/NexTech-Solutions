import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr, SiUpwork } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<ExperienceCard
  title="Evola Labs"
  subTitle="WordPress Designer 2020 - Present"
  icon={<img src="https://evolalabs.com/wp-content/uploads/2025/03/evola-labs-Black.png" alt="Evola Labs Logo" style={{ width: 25, height: 25 }} />}
/>

        <ExperienceCard
  title="Meta World"
  subTitle="WordPress Designer 2019 - 2021"
  icon={<img src="https://evolalabs.com/wp-content/uploads/2025/03/Untitled-design-2.png" alt="Meta World Logo" style={{ width: 25, height: 25 }} />}
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
