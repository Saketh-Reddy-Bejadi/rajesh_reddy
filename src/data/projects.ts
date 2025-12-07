import type { ElementType } from "../types";
import project1 from "../readmes/project1.md?raw";
import project2 from "../readmes/project2.md?raw";

const PROJECTS: ElementType[] = [
    {
        id: "day-6",
        imgURL:"/projects1.png",
        title: "Day 6",
        desc: "November 28, 2025 · 3 min read",
        src: project1
    },
    {
        id: "3-tier-web-application-on-aws",
        imgURL:"/projects2.png",
        title: "3-Tier Web Application on AWS",
        desc: "November 29, 2025 · 4 min read",
        src: project2
    },
]

export default PROJECTS;