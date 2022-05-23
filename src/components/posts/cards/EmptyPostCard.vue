<template>
  <div class="card border-2 shadow-pushcard border8px">
    <div class="card-header bg-white borderFix8px">
      <div class="d-flex">
        <div
          class="p-1 bg-danger border border-light rounded-circle me-1"
        ></div>
        <div
          class="p-1 bg-success border border-light rounded-circle me-1"
        ></div>
        <div
          class="p-1 rounded-circle border border-light rounded-circle bg-warning"
        ></div>
      </div>
    </div>
    <div class="card-body py-5">
      <p class="card-text text-muted text-center">
        <slot>目前尚無動態，新增一則貼文吧！</slot>
      </p>
    </div>
  </div>
</template>
