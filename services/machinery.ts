import { add } from 'date-fns'
import getAlovaInstanceWithAuth from '~/helpers/alova'
import type { IMachinery } from '~/types'

const alovaInstance = getAlovaInstanceWithAuth()

export default {
  getMachineries: (params: string) => {
    return alovaInstance.Get<IMachinery>(`machinery/search${params}`, {
      name: 'getMachineries',
      localCache: {
        mode: 'restore',
        expire: add(new Date(), { minutes: 1 })
      }
    })
  },
  getMachinery: (id: string) => {
    return alovaInstance.Get<IMachinery>(`machinery/${id}`, {
      name: 'getMachinery',
      localCache: {
        mode: 'restore',
        expire: add(new Date(), { minutes: 1 })
      }
    })
  },
}