import { StaticImageData } from "next/image";

export interface ProjectType {
    banner?: string | StaticImageData,
    title: string,
    description: string,
    period: string,
    stack: string[],
    githubLink: string,
    deployedLink?: string,
    featured?: boolean,
}