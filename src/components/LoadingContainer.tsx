import React from "react"
import { SpinnerDiamond } from "spinners-react"

interface Props {
  loading: boolean
  fallback?: React.ReactElement
  children: JSX.Element | null
}

export const LoadingContainer = ({ loading, fallback, children }: Props) => {
  if (loading) {
    return (
      fallback ?? (
        <div className="flex w-full h-full">
          <SpinnerDiamond
            color="white"
            secondaryColor="#181E51"
            size="100%"
            className="m-auto h-1/2 w-1/2 max-h-80 max-w-sm"
          />
        </div>
      )
    )
  }
  return children
}
