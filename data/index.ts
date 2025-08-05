export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am a passionate and dedicated Computer Science student with a strong foundation in programming, web development, and software design",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Student at National Engineering College, Kovilpatti",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building Medicinal plant identification using ML training model",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "To-do List using Tkinter",
    des: "Desktop-based To-Do List application built using Python's Tkinter GUI toolkit and SQLite for persistent data storage",
    img: "/g1.svg",
    iconLists: ["/python.png", "/tkin.png", "/sql.png"],
    link: "/https://github.com/Monishapmj/todo-list-Tkinter-SQLite",
  },
  {
    id: 2,
    title: "Blog Platform Backend",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.jpg",
    iconLists: ["/re.svg", "/cloud.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Monishapmj/book-review-backend",
  },
  {
    id: 3,
    title: "Portfolio",
    des: "A dynamic and modern portfolio showcasing my skills, projects, and professional journey as a full-stack developer, with a strong focus on clean UI, responsive design.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Task Manager",
    des: "A Task Manager web app built using Spring Boot and Maven for managing daily tasks. It supports adding, updating, deleting, and storing tasks with a clean backend structure.",
    img: "/ts.jpg",
    iconLists: [
      "/spring.jpg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "/https://github.com/Monishapmj/TaskManager-Spring-Boot-Maven",
  },
  {
    id: 4,
    title: "IR Sensor Decoding",
    des: "Developed a system to receive and decode infrared signals from remote controls using an IR sensor, enabling custom hardware control based on button inputs..",
    img: "/ir.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Monishapmj/IR-Decoder",
  },
  {
    id: 4,
    title: "Ecommerce Website",
    des: "Designed and developed an online platform for browsing, customizing, and ordering floral bouquets, integrating secure checkout and real-time order tracking features..",
    img: "/bq.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/https://github.com/Monishapmj/Bouque-System",
  },
];

export const testimonials = [
  {
    quote:
      "It’s easy to think of UX as just design, but real user experience starts with performance and clean API responses. I dive into how thoughtful backend architecture makes frontend smoother, faster, and smarter — and why full stack developers need both perspectives.",
    name: "Monisha Jayakumar",
    //title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Sometimes, building a real-world app teaches you more than any course. I walk through five projects — a task manager, a blog CMS, an e-commerce store, and more — and the lessons they taught me about debugging, refactoring, and thinking like a user.",
    name: "Monisha Jayakumar",
    //title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Every developer starts somewhere. For me, it began with curiosity and evolved into crafting full web ecosystems. From debugging CSS to deploying backend APIs, every challenge shaped my skills. This blog shares how I embraced both sides of the stack and found balance in building.",
    name: "Monisha Jayakumar",
  },
  {
    quote:
      "Sometimes, building a real-world app teaches you more than any course. I walk through five projects — a task manager, a blog CMS, an e-commerce store, and more — and the lessons they taught me about debugging, refactoring, and thinking like a user.",
    name: "Monisha Jayakumar",
    //title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity in codsoft.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    desc: "Contributed to building responsive and user-friendly web interfaces using modern frontend technologies in prodigy Infotech.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Backend Developer Intern",
    desc: "developed and integrated efficient server-side logic, APIs, and database management to support seamless application functionality at codeTech IT solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
