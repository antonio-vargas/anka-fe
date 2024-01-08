import {useHttp} from './useHttp'
interface IEmployee {
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}

export default function useMachinery() {
  const machineries = ref([]);
  const machinery = ref([]);
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
        console.log('onResponse-machinery', response._data.data)
        // const { data, status, total } = response._data
        machineries.value = response._data.data
        // totalEmployee.value = total
        loadingMachineries.value = false
      },
      onResponseError({ response }) {
        console.log('onResponseError-machinery', response)
        const data = response._data as ErrorCulqi
        errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingMachineries.value = false
      }
    });
  }

  async function getMachineById(params: string = '') {
    loadingMachinery.value = true
    await useHttp(`machinery/2`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-machinery/2', response)
        const { data, status, total } = response._data
        if (status === 'success') {
          machinery.value = data
          totalEmployee.value = total
        }
        loadingMachinery.value = false
      },
      onResponseError({ response }) {
        const data = response._data as ErrorCulqi
        errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
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