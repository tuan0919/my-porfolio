// Import Icons for Backend
import javaIcon from "../../assets/skills/backend/java.png";
import springBootIcon from "../../assets/skills/backend/springboot.png";
import mysqlIcon from "../../assets/skills/backend/mysql.png";
import redisIcon from "../../assets/skills/backend/redis.png";

// Import Icons for Frontend
import tsIcon from "../../assets/skills/frontend/ts.png";
import reactIcon from "../../assets/skills/frontend/react.png";
import muiIcon from "../../assets/skills/frontend/mui.png";
import twIcon from "../../assets/skills/frontend/tailwind.png";
import androidIcon from "../../assets/skills/frontend/android.png";

// Import Icons for kafka
import kafkaIcon from "../../assets/skills/devops/kafka.png";
import awsIcon from "../../assets/skills/devops/aws.png";
import jenkinsIcon from "../../assets/skills/devops/jenkins.png";
import dockerIcon from "../../assets/skills/devops/docker.png";
import nginxIcon from "../../assets/skills/devops/nginx.png";

import Bookstore from "../../assets/project/bookstore.png";
import NLUMovies from "../../assets/project/nlu-movies.png";
import VideoSharingFrontend from "../../assets/project/video-sharing-front-end.png";
import VideoSharingBackend from "../../assets/project/video-sharing-back-end.png";
import { BookOpenText, Clapperboard, TabletSmartphone } from "lucide-react";
import { ProjectGrid, ProjectGridItem } from "./ProjectItem";

export function ProjectsBentoGrid() {
  return (
    <ProjectGrid>
      {items.map((item, i) => (
        <ProjectGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={item.className}
          icon={item.icon}
          link={item.link}
          time={item.time}
          stack={item.stack}
        />
      ))}
    </ProjectGrid>
  );
}

const items = [
  {
    title: "Japanese Bookstore - Fullstack",
    description: `Japanese Bookstore is a scalable e-commerce web application tailored for the retail sector, 
specializing in Japanese literature and products. The project is designed with real-world implementation in 
mind, emphasizing performance, maintainability, and extensibility to support future growth and business needs.
        `,
    icon: <BookOpenText className="text-[#FFDB00]" />,
    image: Bookstore,
    time: "Mar 2025 - Present",
    stack: [
      reactIcon,
      springBootIcon,
      nginxIcon,
      dockerIcon,
      jenkinsIcon,
      awsIcon,
      javaIcon,
      tsIcon,
      muiIcon,
      mysqlIcon,
    ],
    className: "md:col-span-2",
    link: "https://github.com/tuan0919/bookstore",
  },
  {
    title: "NLU Movies - Frontend",
    description: `Lightweight mobile app for searching and watching film, resources is supplied by some free APIs.`,
    icon: <Clapperboard className="text-[#FFDB00]" />,
    image: NLUMovies,
    time: "Jan 2025 - Jan 2025",
    stack: [reactIcon, javaIcon, tsIcon, androidIcon],
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/nlu-movies",
  },
  {
    title: "Shorty Videos - Frontend",
    description: `Shorty Videos is a closed social network mobile application which helps user to share their valuable moments with others.
        `,
    icon: <TabletSmartphone className="text-[#FFDB00]" />,
    image: VideoSharingFrontend,
    time: "Sep 2024 - Jan 2025",
    stack: [reactIcon, androidIcon, javaIcon, tsIcon, twIcon],
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/my-video-streaming-app-ui",
  },
  {
    title: "Shorty Videos - Backend",
    description: `Back-end for the Shorty Videos application, designed using a Microservices architecture.\n
The system incorporates various architecture patterns such as SAGA, Transaction Outbox, and CQRS to ensure consistency, scalability, and resilience. Core services are built with Spring Boot, following best practices for modular and maintainable back-end systems.\n
Additionally, real-world implementation aspects such as distributed transactions and asynchronous communication were addressed using industry-standard tools and techniques.
        `,
    icon: <TabletSmartphone className="text-[#FFDB00]" />,
    image: VideoSharingBackend,
    time: "Sep 2024 - Jan 2025",
    stack: [
      springBootIcon,
      dockerIcon,
      jenkinsIcon,
      awsIcon,
      javaIcon,
      redisIcon,
      kafkaIcon,
      mysqlIcon,
    ],
    className: "md:col-span-2",
    link: "https://github.com/tuan0919/my-video-streaming-app",
  },
];
