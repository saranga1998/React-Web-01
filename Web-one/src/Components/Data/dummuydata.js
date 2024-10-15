import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import port1 from '../Data/Images/port/port1.jpg';
export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    
    text: "HELLO I'M",
    name: "Sajitha Saranga",
    post: "Full Stack Developer",
    design: "Software Engineer",
    desc: "A dynamic undergraduate with ICT degree from University of Jaffna, Sri Lanka, experienced as intern software engineer/ backend developer at Nanosoft Global,skilled in innovative solutions, database design, and eager to contribute to software development projects.",
  },
]
export const about = [
  {
    desc: "Hello There,",
    desc1: "I am an undergraduate student in the Faculty of Technology, University Of Jaffna. With a diverse and solid foundation in programming languages such as C++, Java, Python, C#, and JavaScript, I've worked on various projects. I've the most experience with .net as I frequently used it in my previous position to design and implement Bank Insurance System.Furthermore, my knowledge extends to  relational databases, namely MySQL,MSSQL . I am a highly motivated and self-driven individual with a passion for software engineering. I am eager to learn new things and to contribute to the development of innovative software solutions.",
    cover: "/Data/Images/Profile.png",
  },
]
export const services = [
  {
    id: 1,
    icon:  "Settings",
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: CropRotate,
  title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: ViewInAr,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: PieChart,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: Code,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: BarChart,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
]
export const project = [
  {
    id: 1,
    icon: "CloudOutlined ",
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon:"FavoriteBorder",
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: "Public",
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: "PersonOutlined ",
    num: "1446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: port1,
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/",
    name: "Alamin Musa",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.png",
    name: "Alex Ander",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.png",
    name: "GorkCoder",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
// export const contact = [
//   {
//     icon: <AddLocationAltOutlined />,
//     text1: "2651 Main Street, Suit 124",
//     text2: "Seattle, WA, 98101",
//   },
//   {
//     icon: <PhoneIphone />,
//     text1: "0123456789",
//     text2: "0345627891",
//   },
//   {
//     icon: <EmailOutlined />,
//     text1: "hello@thetheme.io",
//     text2: "inf0@brex-theme.io",
//   },
// ]
// export const social = [
//   {
//     icon: <Facebook />,
//   },
//   {
//     icon: <Twitter />,
//   },
//   {
//     icon: <Instagram />,
//   },
//   {
//     icon: <YouTube />,
//   },
// ]
