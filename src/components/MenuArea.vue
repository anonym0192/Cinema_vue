<template>
    <section>
        <b-jumbotron tag="div" class="mt-5 container" style="background-color: var(--secondary-black)">  
            <search-area @search="handleSearch"/>
            <menu-buttons /> 
        </b-jumbotron>
    </section>
</template>
<script>

import SearchArea from './SearchArea';
import MenuButtons from './MenuButtons';

export default {
    name: 'MenuArea',
    components: {
        SearchArea, MenuButtons
    },
    methods: {
        handleSearch(query){
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