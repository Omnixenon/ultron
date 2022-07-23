import { FNS_SIZE_PROPS } from '@theme/types/ultron-fns-functions'

export const size = ({ size, sizes, fallback }: FNS_SIZE_PROPS) => {
  if (!size) {
    return sizes[fallback ?? 'md']
  }

  if (typeof size === 'number') {
    return `${size}px;`
  }

  return sizes[size] || size
}
