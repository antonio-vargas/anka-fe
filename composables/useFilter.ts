import {useHttp} from './useHttp'
export default function useFilter() {
  const brands = ref([]);
  const locations = ref([]);
  const categories = ref([]);

  async function getBrands(params: string = '') {
    console.log('ici-getBrands')
    await useHttp(`brand`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-brand', response._data)
        // const { data, status, total } = response._data
        brands.value = response._data
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-brand', response)
        brands.value = []
        // const data = response._data as ErrorCulqi
        // errorEmployee.value = data?.message || 'Hubo un error, vuelva a intentar'
      }
    });
  }

  async function getLocations(params: string = '') {
    console.log('ici-getLocations')
    await useHttp(`location`, {
      method: 'GET',
      onResponse({ response }) {
        console.log('onResponse-location', data)
        // const { data, status, total } = response._data
        locations.value = response._data
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-brand', response)
        locations.value = []
      }
    });
  }

  async function getCategories(params: string = '') {
    console.log('ici-getCategories')
    await useHttp(`category`, {
      method: 'GET',
      onResponse({ data }) {
        console.log('onResponse-brand', data)
        // const { data, status, total } = response._data
        categories.value = response._data
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-brand', response)
        categories.value = []
      }
    });
  }

  return {
    getBrands,
    getLocations,
    getCategories,
    brands: computed(() => {
      return brands.value
    }),
    locations: computed(() => {
      return locations.value
    }),
    categories: computed(() => {
      return categories.value
    })
  };
}