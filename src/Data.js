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
// import { MdOutlinePhonelinkSetup } from "react-icons/md";

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
    title: "Advisory Guide",
    url: "/advisoryguide",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
export const landingContent = [
  {
    maintext: `Absoulte \n Trade Solution`,
    subtext: `We provide the seamless trading solution for busy traders, Investors. Our trading solution makes trading work every time, everywhere.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 1",
  },
  {
    maintext: `Round the Clock \n Trading and \n Intelligent Market \n Analysis`,
    subtext: `There’s one for all, the hard work in trading comes in the preparation. The actual process of trading, however, should be possibly effortless and unimaginable.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 2",
  },
  {
    maintext: `Risk Mitigation \n Portfolio \n Management`,
    subtext: `Trading opportunities are like buses, do ensure you onboard the one going the right route. Success in trading requires an apt solution to meet market demands. The endless opportunity with the right solution.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 3",
  },
  {
    maintext: `TSE- Private \n Partner of Choice.`,
    subtext: `Our core business strategy is a happy trader, we go the extra mile to amplify your trading experience.`,
    primaryBtn: "Get Started",
    secondaryBtn: "Watch Video",
    rightImage: "Landing 4",
  },
  {
    maintext: `Successful \n Traders \n Community.`,
    subtext: `Profitable trading could be for everyone but horizons belong to those who have infinite imagination, those who would not wait for it to come but would embrace the seamless solutions trade sense expert provides..`,
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
    count: "8K+",
    description: `We have more than \n customers`,
    class: "first",
  },
  {
    count: "100+",
    description: `Free online tutorials \n videos avaialble`,
    class: "second",
  },
  {
    count: "90+",
    description: `Daily updated blog \n post maintain`,
    class: "third",
  },
  {
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

export const footerLinks2 = [
  {
    name: "Customer Support",
    href: "./",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Popular Campaign",
    href: "./",
  },
  {
    name: "Privacy Policy",
    href: "./",
  },
  {
    name: "Terms & Conditions",
    href: "/advisoryguide",
  },
];

export const accordionContent = [
  {
    question: "Who are we?",
    answer1:
      "Trade Sense Expert is a Consultancy Firm that majors in Financial Trading, we help Client Optimize trading opportunities. We are not a brokerage firm but we help clients annex profitable opportunities off the financial market. We are traders delight as we proffer trading solutions which help traders have an apt trading experience.",
  },
  {
    question: "What do we do?",
    answer1:
      "Investors who trade stocks, futures, or options typically use a broker who acts as an agent in the transaction. The broker takes the order to an exchange and attempts to execute it per the customer's instructions. The broker is paid a commission when the customer buys and sells the tradable instrument for providing this service.",
  },
  {
    question: "How can I come on board?",
    answer1:
      "Our Onboarding process is seamless, you could want to speak to a consultant as to coming on board.",
  },
  {
    question: "What are the main advantages to being on board?",
    answer1: "Our Risk Mitigation and Account Management offers clients.",
    answer2: "Our expert advisors can give a guaranteed 75% ROI in 3 Months.",
    answer3: "Our Virtual Web Servers can host servers as large as 5MB.",
    answer4: "Trainings are advised solely based on client’s needs.",
    answer5: "There’s a training/eBook for every trader.",
  },
  {
    question: "How certain is it to make money off the financial market?",
    answer1:
      "There’s a solution for everyone just to ensure everyone smiles off the market",
    answer2: "Our Expert Advisors are tested and trusted.",
    answer3:
      "Our awareness of market liquidity gives us that edge to either take and wait for opportunities as they present themselves.",
  },
];

export const testimonialsContent = [
  {
    title: "Kenneth O",
    place: "Port Harcourt, Nigeria",
    img: "Test 1",
    text: "I gave up on forex trading case as my Instinct was right many times and my emotions failed me. Your expert advisor solution had helped me massively. Thank you Trade Sense Expert. I am a happy Trader now.",
  },
  {
    title: "Tolulope A",
    place: "Lagos, Nigeria",
    img: "Test 2",
    text: "Your forex trading solution is top notch, the market signals I get every now and then sent to me are spot on, trust me I never miss those rewarding opportunities not for anything. I am fine with your classic tier subscription, I find it of great value and I promise I would keep telling others about you.",
  },
  {
    title: "Oluwasheyi G",
    place: "Ibadan, Oyo",
    img: "Test 3",
    text: "Amongst the many of your services I enjoy, I find it so exciting how you are able to break down fundamental analysis, I am able to key into your market analysis to take good positions. You have really proved yourself to have the solution to trading forex.",
  },
  {
    title: "Abel O",
    place: "Kaduna, Nigeria",
    img: "Test 4",
    text: "I would make time before the end of this year to come for a physical visit. I am keen on doing expansion business with you and having you have a physical outlet here up North. Thank you trade sense I know better and as you'd say a knowledgeable trader is a successful one.",
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
    title: "Financial Market Trade Plan.",
    description: " ",
    deslist: `  Do you seek to have a systematic approach to reaching your trading target? \n
      Do you seek to know what instruments to consider and a feasible target reach based on your capital? \n
      Do you seek to know how best to manage your trading capital? \n
      Do you seek to understand what trading metrics to use to maximize profit and minimize losses? \n
      These questions and many more are why we are best fit for you.`,
    class: "con-1",
  },
  {
    icon: <BsBriefcase />,
    title: "Risk Mitigation Portfolio Management.",
    description:
      "Trade sense expert Limited is a company which amongst numerous trading solutions it provides majors its competence and signature on risk mitigation and portfolio management RMPM. We give clients trading options across all facets that leaves them satisfied, we provide expert advisors that give clients an absolute edge to making good trade profits.",
    class: "con-2",
  },
  {
    icon: <BsBriefcase />,
    title: "Portfolio Evaluation.",
    description:
      "The ultimate objective of any investor, trader or manager is to speculate, to generate profits on a consistent basis. The adage 'don't put all your eggs in one basket' hinges on the fact that if you drop that one basket, all your eggs will be smashed. On the other hand, if you were carrying four baskets - you’d still have three left if you’d dropped one. Portfolio Evaluation is paramount for every successful trader, there are hundreds of instruments to trade but have you considered why, what, how and when best to take trades. These and many more are why we are here for you.",
    class: "con-3",
  },
  {
    icon: <GiArtificialIntelligence />,
    title: "Artificial Intelligence Expert Advisor (AIEA).",
    description:
      "The Financial market is open 24 hours a day, Monday through Friday. It is clearly impossible for humans to constantly work around these, but machines can trade for days without breaks not showing any sign of fatigue. Trade Sense Expert Advisors are programmed to automatically generate trading signals, identify market trends and alert you to trading opportunities. Just like other automated software, they reduce the likelihood of making emotional and irrational trading decisions. ",
    class: "con-4",
  },
  {
    icon: <IoServerOutline />,
    title: "Virtual Proxy Server",
    description:
      "Clients have access to our numerous trading solutions and one of the most sought-after solutions is acquisition of virtual proxy servers to be used for the hosting of a trading Expert Advisor. The virtual proxy server enables the expert advisor access to constant internet and power supply for continuous position engagement.",
    class: "con-5",
  },
];
export const BusinessList = [
  {
    icon: <TbDeviceAnalytics />,
    title: "Absolute Trade Solution (Webinar)",
    description:
      "The financial market is a transparent one. Traders make just as much as they know off the financial market, many at times what you know just determines the solution you seek, how to align yourself for the solution to meet your financial goals and most of all help you make smart trading decisions. This trade Solution Webinar is FREE.",
    class: "con-1",
  },
  {
    icon: <BsBriefcase />,
    title: "Risk Mitigation Portfolio Management",
    description:
      "Trade sense expert Limited is a company which amongst numerous trading solutions it provides majors its competence and signature on risk mitigation and portfolio management RMPM. We give clients trading options across all facets that leaves them satisfied, we provide expert advisors that give clients an absolute edge to making good trade profits.",
    class: "con-2",
  },
  {
    icon: <BsBriefcase />,
    title: "Financial Market Trainings",
    description:
      "The financial Market is a transparent one, at Trade Sense expert we equip clients with the absolute knowledge of the market as much as they want to know, when they want to know it and how it could aid their trading decisions. Our training cut across using happenings, events, reports, news to make smart trading decisions. The knowledge does not stop at training alone, we provide support that also helps you identify the core instruments that are best considered at every point in time. We offer      different training courses.",
    class: "con-3",
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
