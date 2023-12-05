import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type articleVeille = {
    content: string;
    contentSnippet: string;
    isoDate: string;
    pubDate: Date;
    title: string;
    link: string;
}