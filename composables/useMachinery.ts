import {useHttp} from './useHttp'
import type { IMachinery } from '@/types'

export default function useMachinery() {
  const machineries = ref<IMachinery[]>([]);
  const machinery = ref<IMachinery | null>(null);
  const loadingMachineries = ref(true)
  const loadingMachinery = ref(true)
  const errorEmployee = ref('')
  const totalEmployee = ref(0)

  async function getMachineries(params: string = '') {
    console.log('ici-getMachineries')
    loadingMachineries.value = true
    await useHttp(`machinery/search${params}`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log('onResponse-machinery', response._data.data)
        // const { data, status, total } = response._data
        machineries.value = response._data.data
        // totalEmployee.value = total
        loadingMachineries.value = false
      },
      onResponseError({ response }) {
        console.log('onResponseError-machinery', response)
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingMachineries.value = false
      }
    });
  }

  async function getMachineById(id: string = '') {
    loadingMachinery.value = true
    await useHttp(`machinery/${id}`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log(`onResponse_machinery/${id}`, response._data)
        machinery.value = response._data
        loadingMachinery.value = false
      },
      onResponseError({ response }) {
        console.log(response)
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingMachinery.value = false
      }
    });
  }

  return {
    getMachineries,
    getMachineById,
    totalEmployee,
    machineries: computed(() => {
      return machineries.value
    }),
    machinery: computed(() => {
      return machinery.value
    }),
    loadingMachineries: computed(() => {
      return loadingMachineries.value
    }),
    loadingMachinery: computed(() => {
      return loadingMachinery.value
    }),
    errorEmployee
  };
}