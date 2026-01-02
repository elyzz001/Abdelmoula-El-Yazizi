import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@elyzz001",
    icon: Icons.gitHub,
    link: "https://github.com/elyzz001",
  },
  {
    name: "LinkedIn",
    username: "aelyazizi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aelyazizi",
  },
  
  {
    name: "Gmail",
    username: "aelyazizi",
    icon: Icons.gmail,
    link: "mailto:aelyazizi@gmail.com",
  },
];
