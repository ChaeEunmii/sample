<template>
  <div class="search-container">
    <form @submit.prevent="$emit('search')" class="search-box">
      <div class="grid-fields">
        <slot></slot>
      </div>

      <div class="button-area">
        <div class="extra-slot">
          <slot name="extra"></slot>
        </div>
        <div class="main-buttons">
          <button type="button" class="btn-reset" @click="$emit('reset')">초기화</button>
          <button type="submit" class="btn-search">조회</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search-container {
  background: #fff;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.grid-fields {
  display: grid;
  /* 4개씩 나오는 4컬럼 그리드 시스템 */
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
}

.button-area {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-buttons {
  display: flex;
  gap: 8px;
}
</style>
