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
  const employees = ref([]);
  const loadingEmployee = ref(true)
  const errorEmployee = ref('')
  const totalEmployee = ref(0)

  async function getMachines(params: string = '') {
    loadingEmployee.value = true
    await useHttp(`machinery${params}`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-machinery', response)
        const { data, status, total } = response._data
        if (status === 'success') {
          employees.value = data
          totalEmployee.value = total
        }
        loadingEmployee.value = false
      },
      onResponseError({ response }) {
        const data = response._data as ErrorCulqi
        errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingEmployee.value = false
      }
    });
  }

  async function getMachineById(params: string = '') {
    loadingEmployee.value = true
    await useHttp(`machinery/2`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-machinery/2', response)
        const { data, status, total } = response._data
        if (status === 'success') {
          employees.value = data
          totalEmployee.value = total
        }
        loadingEmployee.value = false
      },
      onResponseError({ response }) {
        const data = response._data as ErrorCulqi
        errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
        loadingEmployee.value = false
      }
    });
  }

  return {
    getMachines,
    getMachineById,
    totalEmployee,
    employees,
    loadingEmployee,
    errorEmployee
  };
}