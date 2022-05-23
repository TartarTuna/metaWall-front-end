<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light border-bottom border-3 border-dark"
  >
    <div class="container px-lg-12">
      <h1 class="font-paytone">
        <router-link to="Wall" class="navbar-brand fs-1">MetaWall</router-link>
      </h1>
      <section class="d-flex align-items-center navDropdown">
        <img
          width="30"
          :src="correctImageUrl(user.photo)"
          alt="user1"
          class="me-2 img-fluid"
        />
        <div class="d-inline bg-white me-2 position-relative">
          <div
            class="btn btn-white border-0 fw-bolder inderline position-relative dropstart"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            {{ user.name }}
          </div>
          <ul
            class="dropdown-menu py-0 bg-white afterDashBoard navDropdown-content"
            aria-labelledby="dropdownMenuButton1"
            style="left: -100%; top: 120%"
          >
            <li class="border border-dark border-2 bg-white">
              <router-link
                to="personal"
                class="dropdown-item fw-bold text-center px-4 py-2"
                >我的貼文牆</router-link
              >
            </li>
            <li class="border border-dark border-2 border-top-0 bg-white">
              <router-link
                to="profile"
                class="dropdown-item fw-bold text-center px-4 py-2"
                >修改個人資料</router-link
              >
            </li>
            <li class="border border-dark border-2 border-top-0 bg-white">
              <router-link
                to="/"
                class="dropdown-item fw-bold text-center px-4 py-2"
                >登出</router-link
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </nav>
</template>

<script setup>
import { user } from '@/compatibles/data'
import { correctImageUrl } from '@/compatibles/image-url'
</script>
