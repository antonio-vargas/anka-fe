import type { MachinaryPropertyObject, MachineryCategory } from '@/types';
import {useHttp} from './useHttp'

export default function useFilter() {
  const brands = ref<MachinaryPropertyObject[]>([]);
  const locations = ref<MachinaryPropertyObject[]>([]);
  const categories = ref<MachineryCategory[]>([]);
  const compatibilities = ref<MachinaryPropertyObject[]>([]);

  async function getBrands(params: string = '') {
    console.log('ici-getBrands')
    await useHttp(`brand`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log('onResponse-brands', response._data)
        // const { data, status, total } = response._data
        brands.value = response._data
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

  async function getLocations(params: string = '') {
    console.log('ici-getLocations')
    await useHttp(`location`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log('onResponse-locations', response._data)
        // const { data, status, total } = response._data
        locations.value = response._data
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-locations', response)
        locations.value = []
      }
    });
  }

  async function getCategories(params: string = '') {
    console.log('ici-getCategories')
    await useHttp(`category`, {
      method: 'GET',
      onResponse({ response }) {
        // console.log('onResponse-categories', response._data)
        // const { data, status, total } = response._data
        categories.value = response._data
        compatibilities.value = response._data.reduce((acc, current) => {
          return acc.concat(current.children)
        }, [])
        // totalEmployee.value = total
      },
      onResponseError({ response }) {
        console.log('onResponseError-categories', response)
        categories.value = []
        compatibilities.value = []
      }
    });
  }

  return {
    getBrands,
    getLocations,
    getCategories,
    compatibilities: computed(() => {
      return compatibilities.value
    }),
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