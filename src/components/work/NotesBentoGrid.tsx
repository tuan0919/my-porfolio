import { NoteGrid, NoteGridItem } from "./NoteItem";
import { SiDocker, SiLinux, SiApachekafka, SiAmazon } from "react-icons/si";

export function NotesBentoGrid() {
  return (
    <NoteGrid className="md:auto-rows-[7rem]">
      {items.map((item, i) => (
        <NoteGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </NoteGrid>
  );
}

const items = [
  {
    title: "Docker",
    description: `Archived notes for Docker.
        `,
    icon: <SiDocker className="text-neutral-800" size={25} />,
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/my-docker-kubernates-learning",
  },
  {
    title: "Linux",
    description: `Archived notes for Linux.`,
    icon: <SiLinux className="text-neutral-800" size={25} />,
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/my-linux-learning",
  },
  {
    title: "Kafka",
    description: `Archived notes for Apache Kafka.`,
    icon: <SiApachekafka className="text-neutral-800" size={25} />,
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/my-kafka-learning",
  },
  {
    title: "AWS",
    description: `Archived notes for Amazon Web Services.`,
    icon: <SiAmazon className="text-neutral-800" size={25} />,
    className: "md:col-span-1",
    link: "https://github.com/tuan0919/my-aws-services",
  },
];
