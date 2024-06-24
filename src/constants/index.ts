import { ModelSize } from "@/enums/model";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game-changing chip.",
      "Groundbreaking performance.",
    ],
    video: "/videos/highlight-first.mp4",
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: "/videos/highlight-sec.mp4",
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: "/videos/highlight-third.mp4",
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: "/videos/highlight-fourth.mp4",
    videoDuration: 3.64,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: "/images/yellow.jpg",
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: "/images/blue.jpg",
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: "/images/white.jpg",
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: "/images/black.jpg",
  },
];

export const sizes = [
  { label: '6.1"', value: ModelSize.SMALL },
  { label: '6.7"', value: ModelSize.LARGE },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
