import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Web Development"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="WordPress Design" link="https://react.dev/" />
        <SkillsInput title="WP Theme Customization" link="https://nextjs.org/" />
        <SkillsInput title="WordPress Security" link="https://nodejs.org/en" />
        <SkillsInput
          title="Landing Pages"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="HTML5" link="https://expressjs.com/" />
        <SkillsInput title="CSS3" link="" />
        <SkillsInput title="Bootstrap" link="https://www.mongodb.com/" />
        <SkillsInput
          title="Tailwind CSS"
          link="https://firebase.google.com/"
        />
        <SkillsInput title="JavaScript" link="https://tailwindcss.com/" />
        <SkillsInput title="JQuery" link="https://www.sanity.io/" />
        <SkillsInput
          title="React Js"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="PHP & MySQL"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="No-Code Development" link="https://code.visualstudio.com/" />
        <SkillsInput
          title="AI Integration"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        />
        <SkillsInput title="ChatBots" link="https://git-scm.com/" />
        <SkillsInput title="AI Automation Tools" link="https://github.com/" />
        <SkillsInput title="AI-Powered Image & Text Generation" link="https://trello.com/en" />
        <SkillsInput title="OpenAI API Integration" link="https://www.gitkraken.com/" />
        <SkillsInput title="AI Video & Image" link="https://www.figma.com/" />
        <SkillsInput title="SEO Optimization" link="https://www.figma.com/" />
        <SkillsInput title="Digital Marketing" link="https://www.canva.com/" />
        <SkillsInput
          title="Social Media Marketing"
          link="https://www.adobe.com/products/illustrator/free-trial-download.html"
        />
        <SkillsInput title="Google Analytics" link="https://dribbble.com/" />
        <SkillsInput title="SEO Content Optimization" link="https://themeforest.net/" />
        <SkillsInput title="UI/UX Design" link="https://vercel.com/" />
        <SkillsInput title="Canva Expert" link="https://www.netlify.com/" />
      </div>
    </div>
  );
};

export default Skills;
