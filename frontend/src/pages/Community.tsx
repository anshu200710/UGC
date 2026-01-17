import { useEffect, useState } from "react"
import type { Generations } from "../types"
import { dummyGenerations } from "../assets/assets"
import { Loader2Icon } from "lucide-react"
import Projectcard from "../components/Projectcard"



const Community = () => {

  const [projects, setProjects] = useState<Generations[]>([])
  const [loading, setLoading] = useState(true)


  const fetchingprojects = async() => {
    setTimeout(() => {
      setProjects(dummyGenerations);
      setLoading(false);
    }, 3000)
  }


  useEffect(() => {
    fetchingprojects()
  }, [])


  return loading ? (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <Loader2Icon className="size-5 animate-spin" />
    </div>
    </>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
          <p className="text-gray-400">See what other are creating with UGC.io</p>
        </header>


        {/* PROJECT LIST */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 md:space-y-0">
          {projects.map((project) => (
             <Projectcard key={project.id} gen={project} setGeneration={setProjects} forCommunity={true} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community
