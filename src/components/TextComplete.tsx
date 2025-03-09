"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Contact Us For Better Touch IN Music
`;


 export function TextComplete() {
    return <TextGenerateEffect words={words} />;

}
