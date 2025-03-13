import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let’s Build Something Amazing!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I’m always open to discussing your project, enhancing your online presence, or helping with web development, AI tools, no-code solutions, SEO, and cryptocurrency projects. Let’s connect and bring your ideas to life!
        </p>
        <a href="https://www.linkedin.com/in/farhanzafartech/">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Farhanmughal215" />
        <SocialLink title="Twitter" link="https://x.com/LabxDev" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/farhanzafartech/"
        />
        <SocialLink
          title="WhatsApp"
          link="https://wa.me/+923456703492"
        />
        <SocialLink title="Telegram" link="https://t.me/Farhan_Tech" />
      </div>
    </div>
  );
};

export default Contact;
