<template>
  <div class="show_block">
    <div class="show_main_block_secound">
      <img src="../assets/images/show_background_mizutama.png" class="show_background_mizutama" />
      <div class="member_profile_block">
        <div class="profile_image">
          <img src="../assets/images/yu.png" alt />
        </div>
        <div class="name_block">
          <p class="nickname">ゆうだい</p>
          <p class="name">いしつ雄大| イシツユウダイ</p>
        </div>
        <div class="colledge_block">
          <p>東洋大学支部</p>
          <p>東洋大学文学部</p>
          <p>僕夏4年目</p>
        </div>
        <div class="career_block">
          <p>
            2017年春、僕夏に入会。会計係として活躍。
            2年目は東洋大学支部長として活動し、
            3年目は実行委員長として僕夏メンバーの指揮を取る。
          </p>
        </div>
        <div class="clearfix">
          <div class="smile">
            <div class="give_smile_block">
              <p>自己肯定感の低い子に、自分らしさに自信を持てるようになってもらいたい</p>
            </div>
            <div class="smile_block">
              <p>誰にどんな笑顔を届けたい？</p>
            </div>
          </div>
          <div class="reason">
            <div class="join_reson_block">
              <p>3日間の交流であまり深く関われなかった子も、最終日に「また会おうね」って言ってくれたこと。</p>
            </div>
            <div class="join_reason">
              <p>活動の中での一番の出会いや発見は？</p>
            </div>
          </div>
        </div>
        <div class="personality">
          <div class="personalities_block">
            <p>
              ・ONE PIECE ・漢方 ・ハンバーグ ・アベンジャーズ ・アンケート修正
              ・一人暮らし
            </p>
          </div>
          <div class="pesonalities">
            <p>私ってこんな人</p>
          </div>
        </div>
        <div class="bokunatsu_links">
          <div class="link_block">
            <p>
              <a href="http://bokunatsu.com/2019/09/12/miyako2019/">・2019年度夏企画を振り返って</a>
              <a href="http://bokunatsu.com/2019/09/11/hunakoshi2019/">・実行委員長として目指すもの</a>
            </p>
          </div>
          <p class="link_name">「僕夏・ことば」の私</p>
        </div>
        <div class="other_links">
          <div class="link_block">
            <p>
              <a href="https://note.com/daichi_tennis">・note</a>
            </p>
          </div>
          <p class="link_name">「他の場面/場所」の私</p>
        </div>
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
.sho_block {
  width: 100%;
}
.show_main_block {
  position: relative;
  background-color: #ffff99;
  width: 80%;
  margin: 0 auto;
  height: 2000px;
  z-index: 0;
}
.show_main_block_secound {
  position: relative;
  background-color: #ffff99;
  width: 80%;
  margin: 0 auto;
  height: 2300px;
  z-index: 0;
}
.show_background_mizutama {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.member_profile_block {
  position: absolute;
  z-index: 20;
  width: 100%;
}
.profile_image {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
.profile_image img {
  width: 90%;
  height: 90%;
  border-radius: 30px;
}
.name_block {
  background-color: #ffffee;
  width: 80%;
  text-align: center;
  margin: 10px auto;
  border-radius: 30px;
}
.nickname {
  font-size: 40px;
}
.name {
  font-size: 30px;
  margin: 0;
}
.colledge_block {
  background-color: #ffffee;
  width: 40%;
  margin: 20px auto;
  text-align: center;
  border-radius: 30px;
}
.colledge_block p {
  font-size: 23px;
  margin: 10px;
}
.career_block {
  background-color: #ffffee;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-radius: 30px;
}
.career_block p {
  font-size: 18px;
  padding: 20px;
  line-height: 40px;
}
.give_smile_block {
  background-color: #ffffee;
  width: 600px;
  height: 400px;
  border-radius: 30px;
  margin-top: 50px;
}
.give_smile_block p,
.join_reson_block p {
  font-size: 28px;
  padding: 60px;
}
.join_reson_block {
  background-color: #ffffee;
  width: 600px;
  height: 400px;
  border-radius: 30px;
  margin-top: 50px;
  margin-right: 50px;
}
.smile {
  float: left;
  margin-left: 60px;
}
.reason {
  float: right;
}
.smile_block p,
.join_reason p {
  text-align: center;
  /* border-bottom: solid 5px; */
  font-size: 25px;
  font-weight: 600;
}
.personalities_block {
  height: 150px;
  background-color: #ffffee;
  width: 70%;
  margin: 0 auto;
  border-radius: 30px;
}
.personalities_block p {
  text-align: center;
  font-size: 20px;
  padding: 30px;
}
.pesonalities {
  width: 70%;
  margin: 0 auto;
}
.pesonalities p {
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}
.link_name {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}
.link_block {
  text-align: center;
  height: 100px;
  margin: 0 auto;
  border-radius: 30px;
  width: 70%;
  height: 100px;
  background-color: #ffffee;
}
.link_block p {
  font-size: 20px;
  line-height: 100px;
}
.link_block a {
  text-decoration: none;
  color: black;
}
</style>
