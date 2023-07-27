"use client"

import gsap from 'gsap';
import { useTheme } from "next-themes"

const projects = [
  {
    title: "9Points",
    color: "#F06318"
  },
  {
    title: "SocialTree",
    color: "#DCF018"
  },
  {
    title: "Untraceable",
    color: "#18F0E8"
  },
  {
    title: "Weather with Franco",
    color: "#8C0CF0"
  },
  {
    title: "Northmarket",
    color: "#F0183C"
  },
  // {
  //   title: "New Orleans",
  //   color: "#F0BA18"
  // },
  // {
  //   title: "Oklahoma City",
  //   color: "#0C34F0"
  // },
  // {
  //   title: "Detroit",
  //   color: "#0CBCF0"
  // },
  // {
  //   title: "Indianapolis",
  //   color: "#91F018"
  // }
]

const Page = ({ }) => {
    const { theme } = useTheme()

    const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      console.log("enter")
      gsap.to(e.target, { top: "-2vw", backgroundColor: projects[index].color, duration: 0.3 })
    }
  
    const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
      console.log("leave")
      gsap.to(
        e.target,
        {
          top: "0",
          backgroundColor: theme === "light" ? "white" : "black",
          duration: 0.3,
          delay: 0.1
        }
      )
    }
  
    return (
      <div className="flex h-[100vh] items-center bg-white dark:bg-black" >
        <div className="relative w-full">
          {
            projects.map((project, index) => (
              <div
                className="border-t border-solid border-t-black dark:border-t-white cursor-pointer relative mb-[-2vw] bg-white dark:bg-black"
                onMouseEnter={(e) => { manageMouseEnter(e, index) }}
                onMouseLeave={(e) => { manageMouseLeave(e, index) }}
                key={index}
              >
                <p className="m-0 text-[4vw] pl-[10px] uppercase pointer-events-none font-bold text-black dark:text-slate-300">{project.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
}

export default Page;