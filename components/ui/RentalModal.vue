<script lang="ts" setup>
import { CloseIcon, RequestQuoteIcon } from '~/components/ui/icons';
import type { MachinaryPropertyObject, IMachinery, IQuoteRequest } from '~/types';
const { sendPurchaseForm, loadingPurchaseForm } = useContact();
const selectedLocation = ref<MachinaryPropertyObject | null>(null)
const { locations, getLocations } = useFilter();

const BUY_FORM = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company: '',
  ruc: '',
  location: "",
  type: "",
  message: '',
}

const show = ref<boolean>(false)
const form = ref<IQuoteRequest>(JSON.parse(JSON.stringify(BUY_FORM)))
const machinery = ref<IMachinery>()
const optionsType = ref<MachinaryPropertyObject[]>([
  {
    id: 1,
    name: 'MÁQUINA SECA'
  },
  {
    id: 2,
    name: 'MÁQUINA OPERADA'
  },
  {
    id: 3,
    name: 'MÁQUINA A TODO COSTO'
  }
])
const selectedType = ref<MachinaryPropertyObject>()
const closeModal = () => {
  show.value = false
}

onMounted(async () => {
  await getLocations()
})

const openModal = (payload: IMachinery) => {
  show.value = true
  machinery.value = payload
}

const handleValidForm = () => {
  if (loadingPurchaseForm.value) return;
  const payload = {
    ...form.value,
    location: selectedLocation.value?.name || '',
    type: `${machinery.value?.name} ${selectedType.value?.name || ''} ${selectedType.value?.name || ''}`
  }
  sendPurchaseForm(payload)
}

defineExpose({
  closeModal,
  openModal
})
</script>
<template>
  <div v-if="show" class="modal">
    <div class="modal__inner">
      <div class="modal__header">
        <div class="modal__title">
          COTIZACIÓN ALQUILER
        </div>
        <button class="btn-close" @click="closeModal"><CloseIcon class="w-5 h-5 lg:w-6 lg:h-6" /></button>
      </div>
      <div class="modal__body">
        <p class="leading-8 text-xs md:text-lg font-telegraf-black font-bold text-primary mb-2">Ingresa tus datos</p>
        <div class="w-full relative grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
          <div class="form__group ">
            <label class="form__label">NOMBRE</label>
            <input
              v-model="form.first_name"
              type="text"
              id="first_name"
              class="form__input"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div class="form__group">
            <label class="form__label">APELLIDO</label>
            <input
              v-model="form.last_name"
              type="text"
              id="last_name"
              class="form__input"
              placeholder="Ingresa tu apellido"
            />
          </div>
          <div class="form__group">
            <label class="form__label">CORREO</label>
            <input
              v-model="form.email"
              type="text"
              id="email"
              class="form__input"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div class="form__group">
            <label class="form__label">CELULAR</label>
            <input
              v-model="form.phone"
              type="text"
              id="phone"
              class="form__input"
              placeholder="Ingresa tu celular"
            />
          </div>
          <div class="form__group">
            <label class="form__label">EMPRESA</label>
            <input
              v-model="form.company"
              type="text"
              id="company"
              class="form__input"
              placeholder="Ingresa tu empresa"
            />
          </div>
          <div class="form__group">
            <label class="form__label">RUC</label>
            <input
              v-model="form.ruc"
              type="text"
              id="ruc"
              class="form__input"
              placeholder="Ingresa tu RUC"
            />
          </div>
          <div class="form__group">
            <label class="form__label">CIUDAD DEL PROYECTO</label>
            <UiSelect
              v-model:model-value="selectedLocation"
              class="z-[4]"
              placeholder="Selecciona la ciudad"
              :options="locations"
            />
          </div>
          <div class="form__group">
            <label class="form__label">TIPO</label>
            <UiSelect
              v-model:model-value="selectedType"
              class="z-[4]"
              placeholder="Selecciona la ciudad"
              :options="optionsType"
            />
          </div>
          <div class="form__group md:col-span-2">
            <label class="form__label">MENSAJE</label>
            <textarea
              v-model="form.message"
              type="text"
              id="message"
              rows="2"
              class="form__input resize-none !h-auto"
              placeholder="Ingresa tu RUC"
            />
          </div>
        </div>

      </div>
      <div class="modal__actions px-4 pb-3">
        <button class="btn-quote" type="button" @click="handleValidForm" :disabled="loadingPurchaseForm">
          <RequestQuoteIcon />
          <span>{{!loadingPurchaseForm ? 'Cotizar' : 'Cotizando'}}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modal {
  @apply fixed w-full h-full flex items-center justify-center z-[160] bg-black/50 top-0 left-0;
  &__inner {
    @apply flex flex-col w-full bg-white max-w-[666px] rounded-md;
  }
  &__header {
    @apply w-full text-primary p-3 lg:p-4 flex justify-between items-center border-b border-[#80A3BA];
    .btn-close{
      @apply w-5 h-5 lg:w-6 lg:h-6;

    }
  }
  &__title {
    @apply text-[22px] leading-[22px] lg:text-[30px] lg:leading-[32px] font-telegraf-black font-bold fill-white lg:fill-primary;
  }
  &__body {
    @apply w-full flex flex-col py-3 lg:py-4 px-3 lg:px-6;
  }
  .form {
    &__group {
      @apply flex w-full flex-col;
    }
    &__label {
      @apply text-xs font-telegraf-black font-bold text-primary mb-0.5;
    }
    &__input {
      @apply border-b border-primary bg-white text-primary h-8 w-full relative flex py-2 px-0 items-center focus:outline-none;
    }
  }
  .btn-quote{
    @apply flex items-center justify-center h-[42px] w-full gap-2;
    @apply bg-secondary text-white rounded-3xl;
    span{
      @apply text-sm leading-[14px] font-telegraf-regular font-bold  uppercase;
      letter-spacing: 0.14px;
    }
    &:disabled {
      @apply bg-secondary/75 cursor-not-allowed;
    }
  }
}
</style>