import type { IQuoteRequest, MachinaryPropertyObject, MachineryCategory } from '@/types';
import {useHttp} from './useHttp'

export default function useContact() {
  const brands = ref<MachinaryPropertyObject[]>([]);
  const locations = ref<MachinaryPropertyObject[]>([]);
  const categories = ref<MachineryCategory[]>([]);
  const compatibilities = ref<MachinaryPropertyObject[]>([]);

  async function postQuote(quoteRequest: IQuoteRequest) {
    console.log('ici-postQuote')
    await useHttp(`forms/purchase`, {
      method: 'POST',
      body: quoteRequest,
      onResponse({ response }) {
        console.log(response)
        // console.log('onResponse-brands', response._data)
        // const { data, status, total } = response._data
        // brands.value = response._data
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-brands', response)
        brands.value = []
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
      }
    });
  }

  return {
    postQuote
  }
}