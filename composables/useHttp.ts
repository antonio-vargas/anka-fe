

export const useHttp = async (path: string, options: any) => {
  return await useFetch(`https://api.ankaingenieros.com/${path}`, options)
}