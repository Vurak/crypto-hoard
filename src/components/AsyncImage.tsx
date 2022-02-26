import { useState, useEffect } from "react"

// async image loading component from https://dev.to/diraskreact/react-async-image-loading-lka

interface Props {
  src: string
  className: string
}

export const AsyncImage = ({ src, ...props }: Props) => {
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

  if (loadedSrc === src) {
    return <img src={src} {...props} />
  }
  return null
}
