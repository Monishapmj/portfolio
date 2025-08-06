import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton"; // Make sure MagicButton is defined or imported correctly

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      name: "LinkedIn",
      img: "/link.svg",
      link: "https://www.linkedin.com/in/monishapmj/",
    },
    {
      id: 2,
      name: "Instagram",
      img: "/insta.svg",
      link: "https://www.instagram.com/monisha_jayakumar_018/",
    },
    {
      id: 3,
      name: "GitHub",
      img: "/git.svg",
      link: "https://github.com/Monishapmj",
    },
  ];

  return (
    <footer className="w-full pt-20 pb-10 relative z-10" id="contact">
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="Footer Grid Background"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Every great idea deserves a{" "}
          <span className="text-purple">Digital Spark</span> &mdash; let&apos;s
          bring yours to life.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 max-w-xl">
          &quot;Why wait for the future when we can build it now? Let&apos;s
          create something awesome together!&quot;
        </p>
        <a href="mailto:monishapmj@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 px-6">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          © {new Date().getFullYear()} Monisha&apos;s Portfolio
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt={`${info.name} Icon`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
