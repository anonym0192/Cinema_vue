<template>
    <b-input-group class="serach-area">
        <b-form-input @keydown.enter="handleSearch" size="lg" v-model="query" placeholder="Search for a movie"></b-form-input>
        <b-input-group-prepend @click="handleSearch">
            <span class="input-group-text"><b-icon icon="search"></b-icon></span>
        </b-input-group-prepend>
    </b-input-group>
</template>

<script>

    export default {
        name: 'Search',
        data: function(){
            return {
                query: this.$route.params.query
            }
        },
        methods:{
            handleSearch: async function(){
                this.$emit('search', this.query);
            }
        }
    }
</script>

<style scoped>
    
</style>