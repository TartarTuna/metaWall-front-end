<template>
  <!-- -phone menu-- -->
  <section
    class="list-group border border-dark border-3 rounded-pill fixed-bottom bg-secondary d-lg-none m-2 fixed-bottom"
  >
    <ul class="d-flex justify-content-around mb-0 ps-0 rounded-pill">
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link :to="{ name: 'wall' }">
          <div
            class="rounded-circle border border-dark border-3 p-2 bg-white d-flex align-items-center"
          >
            <span class="material-icons material-icons-outlined"> home </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link :to="{ name: 'follow' }">
          <div
            class="rounded-circle border border-dark border-3 p-2 bg-white d-flex align-items-center"
          >
            <span class="material-icons material-icons-outlined">
              notifications
            </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link :to="{ name: 'like' }">
          <div
            class="rounded-circle border border-dark border-3 p-2 bg-white d-flex align-items-center"
          >
            <span class="material-icons material-icons-outlined">
              thumb_up
            </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link :to="{ name: 'post' }">
          <div
            class="rounded-circle border border-dark border-3 p-2 bg-primary"
          >
            <span
              class="material-icons material-icons-outlined text-white d-flex align-items-center"
            >
              add
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>
