<template>
  <div class="main_block">
    <img
      src="../assets/images/mizutama.png"
      class="main_block_background_image"
    />
    <div class="members_block">
      <div class="member_block">
        <img src="../assets/images/bu.png" />
        <router-link to="/member">ぶーちゃんのページに行くよ！</router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.main_block {
  height: 1200px;
  background-color: #ffff99;
  position: relative;
  z-index: 0;
}
.main_block_background_image {
  display: block;
  width: 100%;
  height: 1200px;
  position: absolute;
  top: 0;
  z-index: 10;
}
.members_block {
  position: absolute;
  z-index: 20;
  margin-top: 100px;
  margin-left: 140px;
}
.member_block {
  position: relative;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
}
.member_name_block {
  position: absolute;
  top: 0;
  width: 100%;
  height: 98%;
  background-color: #808080;
  opacity: 0.7;
  display: none;
  border-radius: 20px;
}
.name_sentence_block {
  margin-top: 200px;
  margin-left: 100px;
}
.name_sentence_block p {
  color: white;
  border-bottom: solid;
}
.nickname {
  font-size: 30px;
  margin: 0;
}
.member_block img {
  width: 300px;
  height: 300px;
  border: 0.5rem solid;
  border-radius: 20px;
}
</style>
