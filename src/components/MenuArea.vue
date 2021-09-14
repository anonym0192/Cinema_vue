<template>
    <b-jumbotron tag="section" class="menu-area">
        <div class="container">
            <h1>Look for popular movies</h1>
            <search-area @search="handleSearch"/>
            <menu-buttons />
        </div>
    </b-jumbotron>
</template>
<script>

import SearchArea from './SearchArea';
import MenuButtons from './MenuButtons';

export default {
    name: 'MenuArea',
    components: {
        SearchArea, MenuButtons
    },
    data: function(){
        return {}
    },
    methods: {
        handleSearch(query){
            console.log("search... "+query);
            this.$router.push({name: 'search', params: {query: query}});
        },
    }
}
</script>

<style scoped>
    .menu-area{
        margin: 0;
    }
</style>