<template>
  <Navbar />
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-3 border8px border-2 cardDashBoard">
          <div class="row g-0 px-4">
            <div class="col-2 col-lg-1 align-self-center">
              <img
                src="@/assets/img/user6.png"
                class="img-fluid rounded-start d-block m-auto"
                alt="user6"
              />
            </div>
            <div class="col-10 col-lg-11 d-flex justify-content-between">
              <div class="card-body">
                <h5 class="card-title fw-bold">阿爾敏</h5>
                <p class="card-text">
                  <small class="text-muted">987,987 人追蹤</small>
                </p>
              </div>
              <button
                type="button"
                class="btn btn-warning me-2 my-4 px-lg-5 border border-dark border-2 border8px shadow-pushcard d-block fw-bold"
              >
                追蹤
              </button>
              <button
                type="button"
                class="btn btn-gray-light me-2 my-4 px-lg-5 border border-dark border-2 border8px shadow-pushcard d-none fw-bold"
              >
                取消追蹤
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-md-2 mb-3">
            <select id="newPost" class="form-select fw-bold border-2 w-100">
              <option selected>最新貼文</option>
              <option>排序最新</option>
              <option>排序最舊</option>
              <option>tag1</option>
              <option>tag2</option>
              <option>tag3</option>
              <option>tag4</option>
              <option>tag5</option>
            </select>
          </div>
          <div class="col-lg-8">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control fw-bold border-2 border-end-0"
                placeholder="搜尋貼文"
                aria-label="search"
                aria-describedby="button-search"
              />
              <button
                class="btn btn-primary border-2 border border-dark rounded-0 d-flex align-items-center"
                type="button"
                id="button-search"
              >
                <span class="material-icons-outlined"> search </span>
              </button>
            </div>
          </div>
        </div>
        <ul class="ps-0">
          <!-- ----fix ex- 編輯狀態可以用這個充當一下懶人包，可能有不足的再麻煩了- -->
          <li
            class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex align-items-center mb-3">
              <img
                class="me-3 img-fluid"
                src="@/assets/img/user6.png"
                alt="user6"
              />
              <div class="d-flex flex-column mt-2">
                <router-link to="personal" class="mb-0 fw-bold"
                  >阿爾敏</router-link
                >
                <small class="text-muted">2022/1/10 12:00</small>
              </div>
              <div class="ms-auto d-flex">
                <img
                  src="../assets/img/edit.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/share.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/trash.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
              </div>
            </div>
            <form>
              <div class="form-group mb-3">
                <label for="content fw-bold">修改貼文內容</label>
                <textarea
                  class="form-control border border-dark border-2"
                  type="text"
                  id="content"
                  rows="5"
                  placeholder="輸入您的貼文內容"
                ></textarea>
              </div>
              <div class="form-group mb-3">
                <label for="content fw-bold">修改tag</label>
                <textarea
                  class="form-control border border-dark border-2"
                  type="text"
                  id="content"
                  rows="5"
                  placeholder="修改tag"
                ></textarea>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  style="display: none"
                  placeholder="上傳圖片"
                />
                <button class="btn btn-dark border" style="border-radius: 8px">
                  上傳圖片
                </button>
              </div>
              <img
                src="@/assets/img/photo1.png"
                alt="photo1"
                class="w-100 img-fluid mb-2"
              />
              <div class="d-grid gap-2 col-2 ms-auto mt-5">
                <button
                  type="submit"
                  class="btn btn-primary border border-dark border-2 fw-bold py-2 border8px"
                >
                  OK
                </button>
              </div>
            </form>
            <!-- ---thumb--- -->
            <div class="d-flex mt-3">
              <button type="button" class="btn py-0">
                <span
                  class="material-icons material-icons-outlined text-primary fs-5"
                >
                  thumb_up
                </span>
              </button>
              <p class="m-0 fs-7">12</p>
            </div>
            <!-- -add--message--- -->
            <div class="d-flex mt-3">
              <img
                src="@/assets/img/user6.png"
                alt="usr6"
                class="img-fluid me-1"
              />
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-dark border-2 border-end-0"
                  placeholder="留言..."
                  aria-label="message"
                  aria-describedby="button-message"
                />
                <button
                  class="btn btn-primary border-dark border-2 px-4 rounded-0 fw-bold"
                  type="button"
                  id="button-message"
                >
                  留言
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
            <!-- ----openmessage---- -->
            <div class="card h-100 py-3 border-0 rounded-0">
              <a
                class="btn btn-outline-primary border-0 fw-bold"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style="box-shadow: none"
              >
                查看其他留言
              </a>
            </div>
            <section class="collapse" id="collapseExample">
              <ul class="card card-body border-0">
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user6.png"
                      alt="user6"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >阿爾敏</router-link
                      >
                      <small class="text-muted">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="修改貼文內容"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-primary rounded-0"
                      type="button"
                      id="content"
                    >
                      OK
                    </button>
                  </div>
                </li>
                <!-- ------------- -->
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user6.png"
                      alt="user6"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >阿爾敏</router-link
                      >
                      <small class="text-muted">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">真的～我已經準備冬眠了</p>
                </li>
                <!-- ------------- -->
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user4.png"
                      alt="user4"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >波吉</router-link
                      >
                      <small class="text-muted font-xs">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">會嗎？我沒穿衣服都不覺得冷</p>
                </li>
              </ul>
            </section>
          </li>
          <!-- ----1 people--- -->
          <li
            class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex align-items-center mb-3">
              <img
                class="me-3 img-fluid"
                src="@/assets/img/user6.png"
                alt="user6"
              />
              <div class="d-flex flex-column mt-2">
                <router-link to="personal" class="mb-0 fw-bold"
                  >阿爾敏</router-link
                >
                <small class="text-muted">2022/1/10 12:00</small>
              </div>
              <div class="ms-auto d-flex">
                <img
                  src="../assets/img/edit.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/share.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/trash.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
              </div>
            </div>
            <p class="fw-bold">今天找到一張大海的照片<br />太美拉～～～</p>
            <!-- ---tag--- -->
            <div class="card-footer border-0 bg-white d-flex">
              <div class="mx-2 text-primary">#tag1</div>
              <div class="mx-2 text-primary">#tag2</div>
              <div class="mx-2 text-primary">#tag3</div>
            </div>
            <img src="@/assets/img/photo3.png" alt="photo2" class="img-fluid" />
            <!-- ---thumb--- -->
            <div class="d-flex mt-3">
              <button type="button" class="btn py-0">
                <span
                  class="material-icons material-icons-outlined text-primary fs-5"
                >
                  thumb_up
                </span>
              </button>
              <p class="m-0 fs-7">12</p>
            </div>
            <!-- -add--message--- -->
            <div class="d-flex mt-3">
              <img
                src="@/assets/img/user1.png"
                alt="usr1"
                class="img-fluid me-1"
              />
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-dark border-2 border-end-0"
                  placeholder="留言..."
                  aria-label="message"
                  aria-describedby="button-message"
                />
                <button
                  class="btn btn-primary border-dark border-2 px-4 rounded-0 fw-bold"
                  type="button"
                  id="button-message"
                >
                  留言
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
            <!-- ----openmessage---- -->
            <div class="card h-100 py-3 border-0 rounded-0">
              <a
                class="btn btn-outline-primary border-0 fw-bold"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style="box-shadow: none"
              >
                查看其他留言
              </a>
            </div>
            <section class="collapse" id="collapseExample">
              <ul class="card card-body border-0">
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user2.png"
                      alt="user2"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >希琳</router-link
                      >
                      <small class="text-muted">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">跳下去?</p>
                </li>
                <!-- ------ -->
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user4.png"
                      alt="user4"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >波吉</router-link
                      >
                      <small class="text-muted font-xs">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">水鬼開抓囉</p>
                </li>
              </ul>
            </section>
          </li>
          <!-- --- 2 people--- -->
          <li
            class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex align-items-center mb-3">
              <img
                class="me-3 img-fluid"
                src="@/assets/img/user1.png"
                alt="user1"
              />
              <div class="d-flex flex-column mt-2">
                <router-link to="personal" class="mb-0 fw-bold"
                  >邊緣大杰</router-link
                >
                <small class="text-muted">2022/1/10 12:00</small>
              </div>
              <div class="ms-auto d-flex">
                <img
                  src="../assets/img/edit.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/share.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/trash.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
              </div>
            </div>
            <p>下雨囉</p>
            <!-- ---tag--- -->
            <div class="card-footer border-0 bg-white d-flex">
              <div class="mx-2 text-primary">#tag1</div>
              <div class="mx-2 text-primary">#tag2</div>
              <div class="mx-2 text-primary">#tag3</div>
            </div>
            <img src="@/assets/img/photo2.png" alt="photo2" class="img-fluid" />
            <!-- ---thumb--- -->
            <div class="d-flex mt-3">
              <button type="button" class="btn py-0">
                <span
                  class="material-icons material-icons-outlined text-muted fs-5"
                >
                  thumb_up
                </span>
              </button>
              <p class="text-muted m-0 fs-7">成為第一個按讚的朋友</p>
            </div>
            <!-- -add--message--- -->
            <div class="d-flex mt-3">
              <img
                src="@/assets/img/user1.png"
                alt="usr1"
                class="img-fluid me-1"
              />
              <div class="input-group">
                <input
                  type="text"
                  class="form-control text-dark border-dark border-2 border-end-0"
                  placeholder=""
                  value="這邊淹水"
                  aria-label="message"
                  aria-describedby="button-message"
                />
                <button
                  class="btn btn-warning px-4 rounded-0 border-dark border-2 fw-bold"
                  type="button"
                  id="button-message"
                >
                  留言
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
            <!-- ----openmessage---- -->
            <div class="card h-100 py-3 border-0 rounded-0">
              <a
                class="btn btn-outline-primary border-0 fw-bold"
                data-bs-toggle="collapse"
                href="#collapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style="box-shadow: none"
              >
                查看其他留言
              </a>
            </div>
            <section class="collapse" id="collapseExample1">
              <ul class="card card-body border-0">
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user2.png"
                      alt="user2"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >希琳</router-link
                      >
                      <small class="text-muted">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">路上布魯樂谷</p>
                </li>
                <!-- ----- -->
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-3">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user4.png"
                      alt="user4"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >波吉</router-link
                      >
                      <small class="text-muted font-xs">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">淹到生活不能自理</p>
                </li>
              </ul>
            </section>
          </li>
          <!-- --- 3 people--- -->
          <li
            class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex align-items-center mb-3">
              <img
                class="me-3 img-fluid"
                src="@/assets/img/user6.png"
                alt="user6"
              />
              <div class="d-flex flex-column mt-2">
                <router-link to="personal" class="mb-0 fw-bold"
                  >阿爾敏</router-link
                >
                <small class="text-muted">2022/1/10 12:00</small>
              </div>
              <div class="ms-auto d-flex">
                <img
                  src="../assets/img/edit.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/share.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
                <img
                  src="../assets/img/trash.png"
                  class="d-block m-auto mx-2"
                  alt=""
                />
              </div>
            </div>
            <p class="fw-bold">爆炸</p>
            <!-- ---tag--- -->
            <div class="card-footer border-0 bg-white d-flex">
              <div class="mx-2 text-primary">#tag1</div>
              <div class="mx-2 text-primary">#tag2</div>
              <div class="mx-2 text-primary">#tag3</div>
            </div>
            <!-- <img src="#" alt="#">預備用 img有上傳的話會在這 -->
            <!-- ---thumb--- -->
            <div class="d-flex mt-3">
              <button type="button" class="btn py-0">
                <span
                  class="material-icons material-icons-outlined text-muted fs-5"
                >
                  thumb_up
                </span>
              </button>
              <p class="text-muted m-0 fs-7">成為第一個按讚的朋友</p>
            </div>
            <!-- -add--message--- -->
            <div class="d-flex mt-3">
              <img
                src="@/assets/img/user1.png"
                alt="usr1"
                class="img-fluid me-1"
              />
              <div class="input-group">
                <input
                  type="text"
                  class="form-control text-dark border-dark border-2 border-end-0"
                  placeholder=""
                  value="......."
                  aria-label="message"
                  aria-describedby="button-message"
                />
                <button
                  class="btn btn-warning px-4 rounded-0 border-dark border-2 fw-bold"
                  type="button"
                  id="button-message"
                >
                  留言
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
            <!-- ----openmessage---- -->
            <div class="card h-100 py-3 border-0 rounded-0">
              <a
                class="btn btn-outline-primary border-0 fw-bold"
                data-bs-toggle="collapse"
                href="#collapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                style="box-shadow: none"
              >
                查看其他留言
              </a>
            </div>
            <section class="collapse" id="collapseExample2">
              <ul class="card card-body border-0">
                <li
                  class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light"
                >
                  <div class="d-flex align-items-center mb-2">
                    <img
                      class="me-3 img-fluid"
                      src="@/assets/img/user2.png"
                      alt="user2"
                    />
                    <div class="d-flex flex-column mt-2">
                      <router-link to="personal" class="mb-0 fw-bold"
                        >希琳</router-link
                      >
                      <small class="text-muted">2022/1/11 10:00</small>
                    </div>
                    <div class="ms-auto d-flex">
                      <img
                        src="../assets/img/edit.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                      <img
                        src="../assets/img/trash.png"
                        class="d-block m-auto mx-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <p class="m-0 fw-bold">.........</p>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>
      <!-- ---right menu--- -->
      <RightBar />
    </div>
  </section>
  <!-- ---phone-menu----- -->
  <PhoneMenu />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
</script>
