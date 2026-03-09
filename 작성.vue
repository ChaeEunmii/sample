<template>
  <VueDatePicker
    v-model="internalDate"
    v-model:open="isOpen"
    centered
    teleport="body"
    menu-class-name="dp-custom-menu"
    :auto-apply="false"
    :esc-close="false"
  >
    <template #trigger>
      <slot name="trigger">
        <button type="button" class="default-trigger">날짜 선택</button>
      </slot>
    </template>

    <template #action-buttons>
      <div class="dp-actions">
        <button type="button" class="btn-cancel" @click="close">취소</button>
        <button type="button" class="btn-confirm" @click="confirm">확인</button>
      </div>
    </template>
  </VueDatePicker>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const internalDate = ref(props.modelValue);
const isOpen = ref(false);

// 부모 데이터 변경 시 내부 데이터 동기화
watch(() => props.modelValue, (newVal) => {
  internalDate.value = newVal;
});

const close = () => {
  isOpen.value = false;
};

const confirm = () => {
  emit('update:modelValue', internalDate.value);
  close();
};
</script>

<style>
/* Dim 효과 (Teleport 대상인 body 기준으로 적용) */
.dp-custom-menu::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
  pointer-events: auto; /* 바탕 클릭 시 닫힘 방지 핵심 */
}

.dp-actions { display: flex; gap: 8px; padding: 10px; }
.btn-cancel { cursor: pointer; background: #eee; border: 1px solid #ddd; padding: 5px 10px; }
.btn-confirm { cursor: pointer; background: #3498db; color: white; border: none; padding: 5px 10px; }
</style>
