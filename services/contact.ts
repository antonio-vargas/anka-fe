import getAlovaInstanceWithAuth from '~/helpers/alova'

const alovaInstance = getAlovaInstanceWithAuth()

export default {
  postPurchaseForm: (payload: any) => {
    return alovaInstance.Post(`forms/purchase`, {
      name: 'postPurchaseForm',
      data: payload
    })
  },
  postAnnounce: (payload: any) => {
    return alovaInstance.Post(`forms/announce`, {
      name: 'postAnnounce',
      data: payload
    })
  },
  postRentForm: (payload: any) => {
    return alovaInstance.Post(`forms/rent`, {
      name: 'postRentForm',
      data: payload
    })
  },
  postTransportationForm: (payload: any) => {
    return alovaInstance.Post(`forms/transportation`, {
      name: 'postTransportationForm',
      data: payload
    })
  },
}