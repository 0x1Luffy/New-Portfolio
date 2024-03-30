"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect"
import Title from "./Title"
import { SiReact, SiJavascript, SiTypescript, SiPostgresql, SiMongodb,SiPrisma, SiExpress, SiTailwindcss, SiHtml5, SiCss3  } from "react-icons/si";
import { TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";


const Skills = () => {

    const skills = [
        {
        text:"React",
        Icon:SiReact
        },
        {
            text:"JavaScript",
            Icon:SiJavascript
            },
            {
                text:"TypeScript",
                Icon:SiTypescript
                },
                {
                    text:"NextJS",
                    Icon:TbBrandNextjs
                    },
                    {
                        text:"Postgres",
                        Icon:SiPostgresql
                        },
                        {
                            text:"MongoDB",
                            Icon:SiMongodb
                            },
                            {
                                text:"Prisma ORM",
                                Icon:SiPrisma
                                },
                                {
                                    text:"NodeJS",
                                    Icon:TbBrandNodejs
                                    },
                                    {
                                        text:"ExpressJS",
                                        Icon:SiExpress
                                        },
                                        {
                                            text:"Tailwind CSS",
                                            Icon:SiTailwindcss
                                            },
                                            {
                                                text:"HTML5",
                                                Icon:SiHtml5
                                                },
                                                {
                                                    text:"CSS",
                                                    Icon:SiCss3
                                                    },
]
  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills 🏅" className="flex flex-col items-center justify-center -rotate-6"/>

        <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills