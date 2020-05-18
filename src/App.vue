<template>
  <div id="app">
    <HeadItem />
    <HeadSearch />
    <router-view />
  </div>
</template>

<script>
import HeadItem from "./components/HeadItem";
import HeadSearch from "./components/HeadSearch";

export default {
  name: "App",
  components: {
    HeadItem,
    HeadSearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
