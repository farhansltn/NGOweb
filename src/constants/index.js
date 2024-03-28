import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
    bappedaImg,
    witelImg,
    teluImg,
    ceo1,
    ceo2,
    ceo3,
    ceo4,
  } from "../utils";
  
  export const navLists = [
    {
      id: "#home",
      title: "Home",},
    {
      id: "#highlights",
      title: "About",
    },
    {
      id: "#project",
      title: "Projects",
    },
    {
      id: "#chip",
      title: "Works",
    },
  ];

  export const experiences = [
    {
      title: "Field Trip to Kidzania",
      company_name: "PT. Witel Telkom Jakarta Barat",
      icon: witelImg,
      iconBg: "#383E56",
      date: "May 2020 - Jul 2021 and Jun 2021 - Aug 2021 ",
      points: [
        "Introducing various occupations to students and expand their knowledge and inspire them to choose their future interests."
      ],
    },
    {
      title: "Practicum Assistant",
      company_name: "Telkom University",
      icon: bappedaImg,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Mar 2022",
      points: [
        "Supervising Practicum Students in the laboratory to using antenna simulation and antenna hardware to finish the modul task.",
        "Making report about the project's progress to the Labolatory Head and stakeholders.",
        "Designing an Antenna using CST Studio software and Testing it's workrate using also CST Studio",
        "Making an Antenna Project for the module for the student to learn and also create.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Bappeda DKI Jakarta",
      icon: teluImg,
      iconBg: "#E6DEDD",
      date: "Jul 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js,HTML,CSS,PHP, and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Started as a two-person project.",
        "Now is learning ground for kids.",
        "From pre-school to middle school.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: [
        "Our mission is", 
        "To give educational access for kids.",
        "Especially those who come from economically disadvantaged."],
      video: highlightSecondVideo,
      videoDuration: 4,
    },
    {
      id: 3,
      textLists: [
        "We aspire",
        "To become a networking platform",
        "For both students and volunteers.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["We believe ",
      "That education is a window to the world.",
      "Where students are introduced to",
      "a fun and interesting way of learning English"],
      video: highlightFourthVideo,
      videoDuration: 3,
    },
    {
      id: 5,
      textLists: ["Now, there are",
      "45 volunteers ranging from 16-25 years old",
      "helping 77 students from 4-13 years old ",
      "To acquire necessary knowledge",
      "that will propel them towards a better future."],
      video: highlightFourthVideo,
      videoDuration: 3,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
  {
    id: "Privacy Policy",
    link: 'www'
  },
  {
    id: "Privacy Policy",
    link: 'www'
  },
  {
    id: "Privacy Policy",
    link: 'www'
  },  {
    id: "Privacy Policy",
    link: 'www'
  },
  ];
  export const testimonials = [
    {
      testimonial:
        "very very cool website. I love the way we can interact with almost every object in this web! very responsive on mobile phone too, in fact, very flexible and slick web design",
      name: "Enesya Reswara",
      designation: "Part Time Nurse and Lover",
      company: "Ambulanter Pflegedienst at Martina Baltz",
      image: ceo1,
    },{
      testimonial:
        "Farhan is a multitalented person. Farhan have a good understanding of programming & developing tools, making him very flexible and agile in working on projects. Great results, responsive website with trendy design.",
      name: "Aulia Rosyad",
      designation: "Marketing Team",
      company: "TUV Rheiland",
      image: ceo2,
    },{
      testimonial:
        "Great Website Design and very responsive. Great at color picking too. Good content and infographic making, not only just a website programmer but very flexible indeed",
      name: "Milga",
      designation: "Junior Research Executive",
      company: "BOI Research",
      image: ceo3,
    },
    {
      testimonial:
        "The design and choice of colour is great. Website is easy to navigate and provide helpful information.",
      name: "Adam Prakosa",
      designation: "Fresh Graduate at Physics",
      company: "Syarif Hidayatullah Jakarta Islamic State University",
      image: ceo4,
    },
  ];