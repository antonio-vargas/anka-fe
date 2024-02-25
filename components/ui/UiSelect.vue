
import type { mergeProps } from 'vue';
<script lang="ts" setup>
import { isEmpty } from 'lodash'
import { ref } from 'vue'
import { ArrowDownIcon } from '@/components/ui/icons'
import type { MachinaryPropertyObject } from '@/types'

interface Props {
  label: string
  placeholder: string
  options: MachinaryPropertyObject[]
  modelValue: any
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  placeholder: '',
  options: []
})

const emit = defineEmits(['update:modelValue'])
const toggleOptions = ref<boolean>(false)

const handleSelectOption = (item: any) => {
  handleToggleOptions()
  emit('update:modelValue', item)
}

const customText = computed(() => {
  return props.modelValue !== null || props.modelValue !== undefined || props.modelValue !== '' ? props.placeholder : props.modelValue.name
})

const handleToggleOptions = () => {
  toggleOptions.value = !toggleOptions.value
}

</script>
<template>
  <div class="ui-select">
    <label class="ui-select__label">{{ label }}</label>
    <div class="ui-select__inner">
      <button class="ui-select__field" @click="handleToggleOptions()">
        {{ customText }}
        <ArrowDownIcon />
      </button>
      <div class="ui-select__options" v-if="toggleOptions">
        <div
          v-for="(item, index) in options"
          :key="`${label}_${index}`"
          class="ui-select__option"
          :class="{
           'bg-primary/20': props.modelValue?.name === item.name
          }"
          @click="handleSelectOption(item)"
        >{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ui-select {
  @apply flex flex-col relative;
  &__label {
    @apply flex w-full mb-1;
    @apply font-telegraf-black font-bold text-base uppercase;
  }
  &__inner {
    @apply relative w-full;
  }
  &__field {
    @apply h-9 w-full relative justify-between flex px-2 items-center;
    @apply border border-[#BED2DF] bg-white text-primary rounded-lg;
  }
  &__options {
    @apply absolute top-9 left-0 w-full rounded-md;
    @apply bg-white shadow-md;
    @apply max-h-[240px] overflow-y-auto;
  }
  &__option {
    @apply py-1 px-2;
    &.active, &:hover {
      @apply bg-primary/5;
    }
  }
}
</style>
