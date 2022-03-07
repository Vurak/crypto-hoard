import { useCallback, useEffect, useState } from "react"
import { AsyncImage, LoadingContainer } from "."
import { useAsyncImage } from "../hooks"

interface TokenInfo {
  name: string
  symbol: string
  decimals: number
  tokenAuthority: string
  supply: string | number
  type: "nft"
}
interface TokenAccount {
  lamports: number
  ownerProgram: string
  type: "token_account"
  rentEpoch: number
  account: string
  tokenInfo: TokenInfo
  metadata?: any
  onchainMetadata?: any
}

interface PropTypes {
  mint: string
}

export const NFTCard = ({ mint }: PropTypes) => {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<TokenAccount | null>(null)

  const image = useAsyncImage(token?.metadata.data.image)

  const getNFTData = useCallback(() => {
    return fetch(`https://public-api.solscan.io/account/${mint}`).then((res) =>
      res.json()
    )
  }, [mint])

  useEffect(() => {
    setLoading(true)
    getNFTData().then((tokenAccount: TokenAccount) => {
      setToken(tokenAccount)
      setLoading(false)
    })
  }, [getNFTData])

  return (
    <LoadingContainer loading={loading || !image}>
      {token && image ? (
        <div className="mb-4 rounded-lg bg-primary-light text-white" key={mint}>
          <img
            src={image}
            alt={token.metadata.data.name}
            className="w-full rounded-t-lg"
          />
          <div className="p-2">{token.metadata.data.name}</div>
        </div>
      ) : null}
    </LoadingContainer>
  )
}
