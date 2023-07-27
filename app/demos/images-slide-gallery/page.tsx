import Project from "@/components/images-slide-gallery/Project"

const projects = [
  {
    title1: "Jomor",
    title2: "Design",
    src: "jomor_design.jpeg"
  },
  {
    title1: "La",
    title2: "Grange",
    src: "la_grange.jpeg"
  },
  {
    title1: "Deux Huit",
    title2: "Huit",
    src: "deux_huit_huit.jpeg"
  },
  {
    title1: "Nothing",
    title2: "Design Studio",
    src: "nothing_design_studio.png"
  },
  {
    title1: "Mambo",
    title2: "Mambo",
    src: "mambo_mambo.jpeg"
  }
]


const page = ({ }) => {

  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center">
      <div className="w-[70%]">
        {
          projects.map(project => (
            <Project key={project.title1}  project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default page