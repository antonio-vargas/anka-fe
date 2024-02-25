import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'

const getAlovaInstanceWithAuth = () => {
  return createAlova({
    baseURL: `https://api.ankaingenieros.com/`,
    statesHook: VueHook,
    requestAdapter: GlobalFetch(),
    beforeRequest(method) {
      // method.config.credentials = 'include'
      method.config.headers = {
        accept: 'application/json',
        'content-type': 'application/json',
      }
      // @ts-ignore: necessary to download blob
      method.responseType = 'json'
    },
    responded: {
      onSuccess: async (response, method) => {
        // 204 deletion successfull
        if (response.status === 204) {
          return
        }

        // 200 successful
        // 201 creation successful
        if ([200, 201].includes(response.status)) {
          // @ts-ignore: necessary to download blob
          // method.responseType is json
          const json = await response.json()
          return json
        }

        const json = await response.json()
        throw new Error(json.message || json.errors[0].message)
      },
      onError: (err) => {
        throw new Error(err.message)
      }
    }
  })
}

export default getAlovaInstanceWithAuth
