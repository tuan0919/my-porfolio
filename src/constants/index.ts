// Images for Cards
import WebDeveloper from "../assets/skills/web-developer.png"
import CloudAndCICD from "../assets/skills/cicd-setting-up.png"
import DataStructure from "../assets/skills/data-structure.png";
import Coding from "../assets/skills/adaptability.png";

// Import Icons for Backend
import javaIcon from '../assets/skills/backend/java.png';
import springBootIcon from '../assets/skills/backend/springboot.png';
import golangIcon from '../assets/skills/backend/golang.png';
import mysqlIcon from '../assets/skills/backend/mysql.png';
import redisIcon from '../assets/skills/backend/redis.png';

// Import Icons for Frontend
import htmlIcon from '../assets/skills/frontend/html.png';
import cssIcon from '../assets/skills/frontend/css.png';
import jsIcon from '../assets/skills/frontend/js.png';
import tsIcon from '../assets/skills/frontend/ts.png';
import reactIcon from '../assets/skills/frontend/react.png';
import muiIcon from '../assets/skills/frontend/mui.png';
import twIcon from '../assets/skills/frontend/tailwind.png';

// Import Icons for kafka
import kafkaIcon from '../assets/skills/devops/kafka.png';
import cloudflareIcon from '../assets/skills/devops/cloudflare.png';
import awsIcon from '../assets/skills/devops/aws.png';
import jenkinsIcon from '../assets/skills/devops/jenkins.png';
import dockerIcon from '../assets/skills/devops/docker.png';
import nginxIcon from '../assets/skills/devops/nginx.png';

// Import Icons for version control
import gitIcon from '../assets/skills/version-control/git.png';
import githubIcon from '../assets/skills/version-control/github.png';
import gitlabIcon from '../assets/skills/version-control/gitlab.png';

// Import Icons for tools
import vscIcon from '../assets/skills/tools/vscode.png';
import ijIcon from '../assets/skills/tools/intelliJ.png';
import postmanIcon from '../assets/skills/tools/postman.png';
import eclipseIcon from '../assets/skills/tools/eclipse.png';

export const navigationLinks = [
    { title: "expertise", to: "#expertise" },
    { title: "skill", to: "#skills" },
    { title: "project", to: "#projects" },
    { title: "contact", to: "#contact" },
];

export const cards = [
    {
        title: "Full Stack",
        subTitle: "Web Development",
        image: WebDeveloper,
        cardBgColor: "bg-[#FFDB00]",
        textBgColor: "bg-[#FFDB00]",
        textColor: "text-black",
        borderColor: "bg-black",
        //darkBorderColor: "bg-[#333]",
    },
    {
        title: "CI/CD & Cloud",
        subTitle: "Integration",
        image: CloudAndCICD,
        cardBgColor: "bg-[#f7dc6f]",
        textBgColor: "bg-[#000000]",
        textColor: "text-[#FFDB00]",
        borderColor: "bg-black",
        //darkBorderColor: "bg-white",
    },
    {
        title: "Data Structure",
        subTitle: "Proficiency",
        image: DataStructure,
        cardBgColor: "bg-[#000000]", // black
        textBgColor: "bg-[#FFFFFF]",
        textColor: "text-black",
        borderColor: "bg-[#333]",
        //darkBorderColor: "bg-white",
    },
    {
        title: "Quick Technology",
        subTitle: "Adaptation",
        image: Coding,
        cardBgColor: "bg-[#e3e3e3]",
        textBgColor: "bg-[#FFDB00]",
        textColor: "text-black",
        borderColor: "bg-black",
        //darkBorderColor: "bg-white",
    },
];

export const backends = [
    { title: "Reactjs", image: javaIcon },
    { title: "Spring Boot", image: springBootIcon },
    { title: "GoLang", image: golangIcon },
    { title: "MySQL", image: mysqlIcon },
    { title: "Redis", image: redisIcon },
];

export const frontends = [
    { title: "HTML", image: htmlIcon },
    { title: "CSS", image: cssIcon },
    { title: "JavaScript", image: jsIcon },
    { title: "TypeScript", image: tsIcon },
    { title: "React", image: reactIcon },
    { title: "Material UI", image: muiIcon },
    { title: "Tailwind CSS", image: twIcon },
];

export const devops = [
    { title: "Kafka", image: kafkaIcon },
    { title: "Docker", image: dockerIcon },
    { title: "AWS", image: awsIcon },
    { title: "Cloudflare", image: cloudflareIcon },
    { title: "Jenkins", image: jenkinsIcon },
    { title: "Nginx", image: nginxIcon },
]

export const versionControl = [
    { title: "Git", image: gitIcon },
    { title: "Github", image: githubIcon },
    { title: "Gitlab", image: gitlabIcon },
]

export const tools = [
    { title: "VSCode", image: vscIcon },
    { title: "IntelliJ", image: ijIcon },
    { title: "Postman", image: postmanIcon },
    { title: "Eclipse", image: eclipseIcon },
]

export const approach = [
    { step: "Phase 1", title: "Planning & Strategy", description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements." },
    { step: "Phase 2", title: "Dev & Progress Update", description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way." },
    { step: "Phase 3", title: "Development & Launch", description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up." },
];