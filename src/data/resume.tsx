import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Elvis Compson",
  initials: "EC",
  url: "https://dillion.io",
  location: "Ghana, Accra Adenta",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Software Engineer (Frontend Developer) with a passion for creating intuitive and engaging applications. I specialize in building sleek and functional apps with Next.js. Reactjs and Tailwind",
  summary:
    "A passionate Frontend Developer with a strong foundation in Master of Information Systems from the University of Ghana, I specialize in crafting seamless and user-friendly web experiences using Next.js, React, and modern design tools. With a Master's-level education and hands-on experience in UI/UX design and web development, I thrive at the intersection of technology and creativity, building intuitive solutions that engage and inspire.",
  avatarUrl: "/profile3.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Html",
    "Flutter",
    "Tailwind",
    "Express",
    "Sanity",
    "Rest API",
    "Firebase",
    "MongoDb",
  
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "compson9@gmail.com",
    tel: "+233541386476",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Compson9",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/elvis-compson-78a590123",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/el_compson/status/1849190505617207382?s=46&t=wdiKziK1_xaLLSPmMYuPuA",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@designdevshub?si=uk-o4cno5gD5bkZa",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "The Fashion District",
      href: "",
      badges: [],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "/fashion.png",
      start: "January 2024",
      end: "July 2024",
      description:
        "Designed screens for user, vendor, and rider apps to ensure cohesive experiences. Conducted user research to improve satisfaction, created wireframes and prototypes, and developed modern, functional interfaces aligned with the latest design principles.",
    },

    {
      company: "Modexa Biotech",
      href: "",
      badges: [],
      location: "Remote",
      title: "Front-End Developer",
      logoUrl: "/modexa.jpg",
      start: "August 2022",
      end: "November 2024",
      description:
        "Led a team of front-end developers in creating responsive user interfaces with Next.js and Tailwind CSS. Collaborated with back-end developers to integrate systems and databases, ensuring scalable and maintainable front-end architecture.",
    },


    {
      company: "Amber Orbit",
      href: "",
      badges: [],
      location: "Remote",
      title: "Junior Front-End Developer",
      logoUrl: "/amber1.png",
      start: "January 2022",
      end: "August 2022",
      description:
        "Contributed to the development of a user-centric payment platform. Redesigned the website's home section for improved engagement and aesthetics. Utilized React and Figma to implement innovative and responsive design concepts.",
    },

    {
      company: "Electoral Commission of Ghana",
      href: "",
      badges: [],
      location: "Accra, Ghana",
      title: "National Service Assistant (IT Department)",
      logoUrl: "/eclogo.jpg",
      start: "September 2020",
      end: "August 2021",
      description:
        "Monitored ballot printing during Ghana's 2020 general elections and participated in the Voter Register Exhibition Exercise. Managed website updates for the IT department.",
    },
  ],
  
  education: [
    {
      school: "University of Ghana Business School",
      href: "https://www.ug.edu.gh",
      degree: "Master of Philosophy in Management Information Systems (Software Engineering)",
      logoUrl: "/bulogo.jpg",
      start: "2022",
      end: "2024",
    },

    {
      school: "University of Ghana",
      href: "https://www.ug.edu.gh",
      degree: "Bachelor of Arts in Information Studies",
      logoUrl: "/uglogo.png",
      start: "2016",
      end: "2020",
    },
    
  ],
  
  projects: [
    {
      title: "Sleek AI Website ",
      href: "https://compsonai.netlify.app/",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Developed a sleek and modern UI website with React and TailwindCSS, focusing on a clean, responsive design to enhance user engagement.",
      technologies: [
        "Next.js",
        "Tailwind", 
        "React-icons"
      ],
      links: [
        {
          type: "Website",
          href: "https://compsonai.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/brainwave.jpg",
      video:
        "",
    },
    {
      title: "LiveDocs: Real-Time Collaborative Editor",
      href: "https://livetexteditor.vercel.app/sign-in",
      dates: "June 2024 - September 2024",
      active: true,
      description:
        "Created a Google Docs clone emphasizing real-time collaboration with features like secure GitHub authentication, real-time editing, document management, and cross-device responsiveness",
      technologies: [
        "Next.js",
      "TypeScript",
      "Liveblocks",
      "Lexical Editor",
      "TailwindCSS",
      "ClerkAuth",
      ],
      links: [
        {
          type: "Web app",
          href: "https://livetexteditor.vercel.app/sign-in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/text-editor.png",
      video:
        "",
    },
    {
      title: "Modern Landing Page with Animations",
      href: "https://modern-website-17zk-git-main-compson9s-projects.vercel.app/",
      dates: "June 2022 - September 2022",
      active: true,
      description:
        "Built a modern landing page featuring engaging animations and a responsive design, showcasing creativity and technical precision.",
      technologies: [
        "React",
        "Tailwind",
        "Arternity Ui",
      ],
      links: [
        {
          type: "Website",
          href: "https://modern-website-17zk-git-main-compson9s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/modernui.png",
      video:
        "",
    },
    {
      title: "YouTube Clone",
      href: "https://compsontube.netlify.app/",
      dates: "June 2021 - Dec 2022",
      active: true,
      description:
        "Built a modern landing page featuring engaging animations and a responsive design, showcasing creativity and technical precision.",
      technologies: [
        "ReactJS", 
        "RapidAPI", 
        "Material UI", 
        "JavaScript",
        "CSS"
      ],
      links: [
        {
          type: "Web app",
          href: "https://compsontube.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/youtube-clone.png",
      video:
        "",
    },

    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2023",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 20122",
      location: "Ghana",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2024",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2023",
      location: "Ghana",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2024",
      location: "Ghana",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
   
    
    
    
    
  
    
   
    
    
    
   
    
  ],
} as const;
