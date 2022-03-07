import { useEffect, useState } from "react"

export const useAsyncImage = (src: string | null) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)

  useEffect(() => {
    setLoadedSrc(null)
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src)
      }
      const image = new Image()
      image.addEventListener("load", handleLoad)
      image.src = src
      return () => {
        image.removeEventListener("load", handleLoad)
      }
    }
  }, [src])

  return loadedSrc
}
