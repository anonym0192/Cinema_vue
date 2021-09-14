<template>
  <div id="app">
    <Header />
    <menu-area />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import MenuArea from './components/MenuArea';


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MenuArea
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main{
  padding: 45px;
}

::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar{
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}

</style>
