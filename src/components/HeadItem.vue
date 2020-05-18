<template>
  <header>
    <div class="header-background">
      <img src="../assets/images/header_background_image.jpg" />
      <div class="main-logo">
        <router-link to="/"
          ><img
            src="../assets/images/header_main_log.png"
            class="header_main_log"
        /></router-link>
      </div>
      <div class="sab-logo">
        <img src="../assets/images/header_sab_log.png" class="header_sab_log" />
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped>
.header_background_image {
  width: 100%;
  height: 200px;
  position: relative;
}
.header_main_log {
  width: 700px;
  position: absolute;
  top: 40px;
  left: 500px;
}
.header_sab_log {
  position: absolute;
  top: 90px;
  right: 0;
}
</style>
