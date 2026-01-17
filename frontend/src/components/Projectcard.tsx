import { useNavigate } from "react-router-dom"
import type { Generations } from "../types"
import { useState } from "react"

const Projectcard = ({
  gen,
  setGeneration,
  forCommunity = false,
}: {
  gen: Generations
  setGeneration: React.Dispatch<React.SetStateAction<Generations[]>>
  forCommunity?: boolean
}) => {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)

  return (
    <div className="mb-4 break-inside-avoid">
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition group">

        {/* PREVIEW */}
        <div
          className={`${gen?.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative overflow-hidden`}
          style={{ aspectRatio: gen.aspectRatio.replace(":", "/") }}
        >
          {gen.generatedImage && (
            <img
              src={gen.generatedImage}
              alt={gen.productName}
              className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${
                gen.generatedVideo
                  ? "group-hover:opacity-0"
                  : "group-hover:scale-105"
              }`}
            />
          )}


          
        </div>

        {/* DETAILS */}
        <div className="p-4">
          <h3 className="font-semibold">{gen.productName}</h3>
          <p className="text-sm text-gray-400">
            {gen.productDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projectcard
