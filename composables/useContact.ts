import type { IQuoteRequest, MachinaryPropertyObject, MachineryCategory } from '@/types';
import { useRequest } from 'alova'
import {useHttp} from './useHttp'
import ContactService from '~/services/contact'

export default function useContact() {
  const {
    send: sendPurchaseForm,
    loading: loadingPurchaseForm,
  } = useRequest((payload) => ContactService.postPurchaseForm(payload), {
    immediate: false,
  })
  return {
    sendPurchaseForm,
    loadingPurchaseForm
  }
}