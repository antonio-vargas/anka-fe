import { add } from 'date-fns'
import getAlovaInstanceWithAuth from '~/helpers/alova'
import type { ISparePart } from '~/types'

const alovaInstance = getAlovaInstanceWithAuth()

export default {
  getSpareParts: (params: string) => {
    return alovaInstance.Get<ISparePart>(`sparepart/search${params}`, {
      name: 'getSpareParts',
      localCache: {
        mode: 'restore',
        expire: add(new Date(), { minutes: 1 })
      }
    })
  },
  getSparePart: (id: string) => {
    return alovaInstance.Get<ISparePart>(`sparepart/${id}`, {
      name: 'getSparePart',
      localCache: {
        mode: 'restore',
        expire: add(new Date(), { minutes: 1 })
      }
    })
  },
}