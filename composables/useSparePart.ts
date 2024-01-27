import {useHttp} from './useHttp'
import type { ISparePart } from '@/types'

export default function useSparePart() {
  const spareParts = ref<ISparePart[]>([]);
  const totalSpareParts = ref<number>(0)
  const sparePart = ref<ISparePart | null>(null);
  const loadingSparePart = ref(true)
  const loadingSpareParts = ref(true)
  const errorEmployee = ref('')

  async function getSpareParts(params: string = '') {
    console.log('ici-getspareParts')
    // loadingSpareParts.value = true
    await useHttp(`sparepart/search${params}`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log('onResponse-machinery', response._data.data)
        // const { data, status, total } = response._data
        spareParts.value = response._data.data
        totalSpareParts.value = response._data.totalCount
        loadingSpareParts.value = false
      },
      onResponseError({ response }) {
        console.log('onResponseError-machinery', response)
        totalSpareParts.value = 0
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingSpareParts.value = false
      }
    });
  }

  async function getSparePartById(id: string = '') {
    loadingSparePart.value = true
    await useHttp(`sparepart/${id}`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log(`onResponse_machinery/${id}`, response._data)
        sparePart.value = response._data
        loadingSparePart.value = false
      },
      onResponseError({ response }) {
        console.log(response)
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingSparePart.value = false
      }
    });
  }

  return {
    getSpareParts,
    getSparePartById,
    totalSpareParts: computed(() => {
      return totalSpareParts.value
    }),
    spareParts: computed(() => {
      return spareParts.value
    }),
    loadingSpareParts: computed(() => {
      return loadingSpareParts.value
    }),
    sparePart: computed(() => {
      return sparePart.value
    }),
    loadingSparePart: computed(() => {
      return loadingSparePart.value
    }),
    errorEmployee
  };
}