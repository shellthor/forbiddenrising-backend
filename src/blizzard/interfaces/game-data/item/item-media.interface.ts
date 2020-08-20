import { Links } from '../../profile'

export interface ItemMedia {
  _links: Links
  assets: Asset[]
}

export interface Asset {
  key: string
  value: string
}
