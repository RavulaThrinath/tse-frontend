import {
  BsCurrencyDollar,
  BsFlag,
  BsServer,
  BsBriefcase,
} from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { BiCrown, BiLockOpen, BiLock } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { IoServerOutline } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

export const navbarLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Pricing",
    url: "/pricing",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
export const landingContent = [
  {
    maintext: `Absoulte \n Trade Solution`,
    subtext: `Round the clock trading & intelligent analysis to \n ensure continous growth of your investments.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 1",
  },
  {
    maintext: `The impossible \n and unthinkable.`,
    subtext: `Round the clock trading & intelligent analysis to \n ensure continous growth of your investments.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 2",
  },
  {
    maintext: `Endless \n Opportunities`,
    subtext: `Round the clock trading & intelligent analysis to \n ensure continous growth of your investments.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 3",
  },
  {
    maintext: `A brand \n new horizon`,
    subtext: `Round the clock trading & intelligent analysis to \n ensure continous growth of your investments.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 4",
  },
];
export const ServicesContent = [
  {
    id: 0,
    icon: <BsCurrencyDollar />,
    class: "service-1",
    title: "Business Strategy",
    description:
      "Absolute Trade Solution, Risk Mitigation Portfolio management, and Money Flow Index MFI.",
    url: "/services/BusinessStrategy",
  },
  {
    id: 1,
    icon: <RiArticleLine />,
    class: "service-2",
    title: "Consultancy Services",
    description:
      "Market Analysis Trade Plan, Portfolio Evaluation, and Artificial Intelligence Expert Advisor.",
    url: "/services/ConsultancyServices",
  },
  {
    id: 2,
    icon: <BsFlag />,
    class: "service-3",
    title: "License Configuration",
    description:
      "Our Advisor is a fully automated financial trading software with adjustable entry parameters.",
    url: "/services/LicenseConfiguration",
  },
  {
    id: 3,
    icon: <BsServer />,
    class: "service-4",
    title: "Virtual Private Server",
    description:
      "We offers clients the opportunity to purchase VPS to be used for the hosting of the Expert Advisor.",
    url: "/services/VirtualPrivateServer",
  },
];

export const numbersList = [
  {
    id: 0,
    count: "8K+",
    description: `We have more than \n customers`,
    class: "first",
  },
  {
    id: 1,
    count: "100+",
    description: `Free online tutorials \n videos avaialble`,
    class: "second",
  },
  {
    id: 2,
    count: "90+",
    description: `Daily updated blog \n post maintain`,
    class: "third",
  },
  {
    id: 3,
    count: "3M",
    description: `Job posted everydays \n with qualification`,
    class: "fourth",
  },
];
export const stepsList = [
  {
    id: 0,
    digit: "01",
    title: "Register",
    description: `Open your Trade Sense \n Expert Account and join us.`,
  },
  {
    id: 1,
    digit: "02",
    title: "Login",
    description: `Confirm your information \n and complete your login`,
  },
  {
    id: 2,
    digit: "03",
    title: "Fund",
    description: `Through Bitcoin payment, \n fund your account`,
  },
  {
    id: 3,
    digit: "04",
    title: "Learn",
    description: `Through Bitcoin payment, \n fund your account`,
  },
];

export const footerLinks1 = [
  {
    name: "Support Center",
    href: "./",
  },
  {
    name: "Customer Support",
    href: "./",
  },
  {
    name: "About Us",
    href: "./",
  },
  {
    name: "Copyright",
    href: "./",
  },
  {
    name: "Popular Campaign",
    href: "./",
  },
];

export const footerLinks2 = [
  {
    name: "Return Policy",
    href: "./",
  },
  {
    name: "Privacy Policy",
    href: "./",
  },
  {
    name: "Terms & Conditions",
    href: "./",
  },
  {
    name: "Site Map",
    href: "./",
  },
  {
    name: "Store Hours",
    href: "./",
  },
];

export const footerLinks3 = [
  {
    name: "Application security",
    href: "./",
  },
  {
    name: "Support Center",
    href: "./",
  },
  {
    name: "Software principles",
    href: "./",
  },
  {
    name: "Unwanted software policy",
    href: "./",
  },
  {
    name: "Responsible supply chain",
    href: "./",
  },
];

export const accordionContent = [
  {
    question: "How does Forex compare to other Markets?",
    answer:
      "Unlike stocks, futures, or options, currency trading does not take place on a regulated exchange, and it is not controlled by any central governing body. There are no clearing houses to guarantee trades, and there is no arbitration panel to adjudicate disputes. All members trade with each other based on credit agreements. Essentially, business in the largest, most liquid market in the world depends on nothing more than a metaphorical handshake.",
  },
  {
    question: "What is the Forex Commission?",
    answer:
      "Investors who trade stocks, futures, or options typically use a broker who acts as an agent in the transaction. The broker takes the order to an exchange and attempts to execute it per the customer's instructions. The broker is paid a commission when the customer buys and sells the tradable instrument for providing this service.",
  },
  {
    question: "What is a Pip?",
    answer:
      "Pip stands for percentage in point and is the smallest increment of trade in FX. In the FX market, prices are quoted to the fourth decimal point. For example, if a bar of soap in the drugstore was priced at $1.20, in the FX market the same bar of soap would be quoted at 1.2000. The change in that fourth decimal point is called 1 pip and is typically equal to 1/100th of 1%.",
  },
  {
    question: "What are you really Trading?",
    answer:
      "FX traders hope to profit from changes in exchange rates between currency pairs. For dollar-denominated accounts, all profits or losses are calculated in dollars and recorded as such on the trader's account",
  },
  {
    question: "What is a Currency Carry Trade?",
    answer:
      "Carry is the most popular trade in the currency market, practiced by both the largest hedge funds and the smallest retail speculators. The carry trade is based on the fact that every currency in the world has an associated interest. These short-term interest rates are set by the central banks of these countries: the Federal Reserve in the United States, the Bank of Japan in Japan, and the Bank of England in the United Kingdom.",
  },
];

export const testimonialsContent = [
  {
    title: "malachy Onah ",
    place: "Nigeria",
    img: "Test 1",
    text: "I’ve been waiting for this service for such a long time! I’ve been following your signals for a few months already and they are fantastic, but it wasn’t that easy to copy them and kept missing too many of them. I’ve never seen such a professional service! Subscribing to your premium account was one of the best decisions I’ve made…",
  },
  {
    title: "Frank Karlini ",
    place: "Canada",
    img: "Test 2",
    text: "Your service is amazing! By getting the signals directly to my email in real time, I almost never miss a trade. Before I had your premium service, I also had some nice profits each month, but with the premium account, my profits just doubled! I just made last Thank you FX Market Leaders team, keep up the good work.",
  },
  {
    title: "Genna Frester ",
    place: "Germany",
    img: "Test 3",
    text: "Well since the day I have been checking and copying your signals I found it 90% profitable, because  of the time difference I follow your signals only 4 hours a day buts its more than enough Thank you fx market leaders, you really proved yourself the market leaders or I would say for me fx market champions.",
  },
  {
    title: "Jed Molloy ",
    place: "Australia",
    img: "Test 4",
    text: "It’s been fantastic. I’ve been using it blindly on a demo account for the past few days and so far it has had a 100% success rate. The take profits seems really high at times. But so far I highly recommend this useful tool. But the hit rate is much higher than my expectations",
  },
  {
    title: "Adam Thompson",
    place: "London",
    img: "Test 5",
    text: "Your service is amazing! By getting the signals directly to my email in real time, I almost never miss a trade. Before I had your premium service, I also had some nice profits each month, but with the premium account, my profits just doubled! I just made last Thank you FX Market Leaders team, keep up the good work.",
  },
  {
    title: "Krishna Kumar ",
    place: "India",
    img: "Test 6",
    text: "Well since the day I have been checking and copying your signals I found it 90% profitable, because  of the time difference I follow your signals only 4 hours a day buts its more than enough Thank you fx market leaders, you really proved yourself the market leaders or I would say for me fx market champions.",
  },
];

export const teamList = [
  {
    imageId: "Team1",
    fisrtname: "Peter Hudson",
    designation: "CEO, Founder",
  },
  {
    imageId: "Team2",
    fisrtname: "James Smith",
    designation: "Vice President",
  },
  {
    imageId: "Team3",
    fisrtname: "Amy Mays",
    designation: "Co-founder",
  },
];

export const ConsultancyList = [
  {
    icon: <TbDeviceAnalytics />,
    title: "Market Analysis Trade Plan",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-1",
  },
  {
    icon: <BsBriefcase />,
    title: "Portfolio Risk Management",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-2",
  },
  {
    icon: <BsBriefcase />,
    title: "Portfolio Risk Management",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-3",
  },
  {
    icon: <GiArtificialIntelligence />,
    title: "AI Expert Advisor",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-4",
  },
  {
    icon: <MdOutlinePhonelinkSetup />,
    title: "Trading apps and Setup",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-5",
  },
  {
    icon: <IoServerOutline />,
    title: "Virtual Proxy Server",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.",
    class: "con-6",
  },
];

export const VpsList = [
  {
    icon: <BiLockOpen />,
    title: "Free Tier",
    description:
      "Trade Sense Expert Limited offers clients the opportunity to purchase virtual private servers to be used for the hosting of the Expert Advisor. The virtual proxy server enables the expert advisor access to constant internet and power supply for continuous position engagement. Upon the setting up of the expert advisor, clients would be onboarded in 3 phases;",
    class: "cont-1",
  },
  {
    icon: <BiLock />,
    title: "Classic Tier",
    description:
      "Classic Tier offers 3 months virtual proxy hosting and server management of the expert advisor. Classic tier attracts monthly $15 virtual proxy hosting and $50 for Server Management services. The server management entails market analysis in relation to the expert advisor’s open positions, risk mitigation and portfolio management RMPM, account status report and expert recommendations in relation to the account status report.",
    class: "cont-2",
  },
  {
    icon: <BiCrown />,
    title: "Premium Tier",
    description:
      "Clients can decide to migrate to Premium Tier. The plan offers 6 to 12 months of virtual proxy hosting and server management of the expert advisor. Premium Tier attracts monthly $15 virtual proxy hosting and $50 for Server Management services. 10% discount applies to 6 months subscription and 20% discount for 12months subscription. The server management entails market analysis in relation to the expert advisor’s open positions, risk mitigation and portfolio management RMPM, account status report and expert recommendations in relation to the account status report.",
    class: "cont-3",
  },
];

export const plansList = [
  {
    text: "Ultimate access to all course, exercises and assessments",
  },
  {
    text: "Free acess for all kind of exercise corrections with downloads.",
  },
  {
    text: "Total assessment corrections with free download access system",
  },
  {
    text: "Unlimited download of courses on the mobile app contents",
  },
];
