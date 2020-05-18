<template>
  <div class="search_header_block">
    <div class="search_narrow_block">
      <form
        local="true"
        action="/search_by_narrow"
        accept-charset="UTF-8"
        method="get"
        class="search_narrow_form"
      >
        <div class="search_narrow_select_block">
          <select name="narrow_university_branch" id="university_branch">
            <option value="支部" label="支部">支部</option>
            <option value="独協大学支部">独協大学支部</option>
            <option value="執行部">執行部</option>
            <option value="武蔵野大学支部">武蔵野大学支部</option>
          </select>
          <select name="narrow_assigned_school" id="assigned_school">
            <option value="" label="交流小学校"></option>
            <option value="鵜住居小学校">鵜住居小学校</option>
            <option value="大沢小学校">大沢小学校</option>
            <option value="新里小学校">新里小学校</option>
            <option value="山口小学校">山口小学校</option>
            <option value="無所属">無所属</option>
          </select>
          <select name="narrow_title_of_branch" id="title_of_branch">
            <option value="" label="役職"></option>
            <option value="支部長">支部長</option>
            <option value="小学校担当">小学校担当</option>
          </select>
        </div>

        <input
          type="submit"
          name="commit"
          value=""
          data-disable-with=""
          class="narrow_submit_btn"
        />
      </form>
    </div>

    <div class="members_table">
      <router-link to="/members"
        ><img src="../assets/images/button5.png" class="members_table_button"
      /></router-link>
    </div>

    <div class="freeword_search_block">
      <form local="true" action="/search" accept-charset="UTF-8" method="get">
        <input
          type="submit"
          name="commit"
          value=""
          data-disable-with="検索"
          class="freeword_search_button"
        />
        <div class="freeword_search_select_block">
          <select name="search[model]" id="search_model"
            ><option value="趣味">趣味</option>
            <option value="挑戦したいこと">挑戦したいこと</option>
            <option value="故郷">故郷</option>
            <option value="興味">興味</option>
            <option value="名前orニックネーム">名前orニックネーム</option>
            <option value="学部学科">学部学科</option>
          </select>
          <input
            type="text"
            name="search[keyword]"
            id="search_keyword"
            value=""
            placeholder="知りたいことを入力してね！"
            size="50"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>

<style scoped>
/* ここからheader_search */
.search_header_block {
  width: 90%;
  margin: 0 auto;
  height: 300px;
}
.search_narrow_block {
  width: 600px;
  height: 230px;
  margin-left: 140px;
  float: left;
}
.search_narrow_form select {
  display: block;
  width: 270px;
  height: 50px;
  margin-top: 20px;
  border: none;
}
.search_narrow_form input {
  box-shadow: 2px 15px 20px grey;
  border-radius: 30px;
  border: none;
  margin-left: 50px;
  width: 170px;
  height: 170px;
  background-image: url("../assets/images/button4.png");
  background-size: cover;
  margin-top: 22px;
}
.search_narrow_select_block {
  width: 270px;
  float: left;
}
.members_table {
  float: left;
}
.members_table_button {
  width: 170px;
  height: 170px;
  margin-top: 40px;
  box-shadow: 2px 15px 20px grey;
  border-radius: 30px;
}
.freeword_search_block {
  display: block;
  float: left;
}
.freeword_search_button {
  background-image: url("../assets/images/button6.png");
  box-shadow: 2px 15px 20px grey;
  border-radius: 30px;
  background-size: cover;
  width: 170px;
  height: 170px;
  border: none;
  margin-left: 100px;
  margin-top: 40px;
}
.freeword_search_select_block {
  float: right;
  margin-top: 50px;
  margin-left: 60px;
}
.freeword_search_select_block select {
  display: block;
  width: 270px;
  height: 50px;
  margin-bottom: 20px;
}
.freeword_search_select_block input {
  width: 265px;
  height: 50px;
}
</style>
