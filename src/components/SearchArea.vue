<template>
    <b-input-group class="mb-2 border border-light rounded-lg">
        <b-form-input id="search-field" @keydown.enter="handleSearch" size="lg" v-model="query" :placeholder="$t('search_placeholder')"></b-form-input>
        <b-input-group-prepend @click="handleSearch" style="cursor: pointer; bg-transparent">
            <span class="input-group-text"><b-icon icon="search"></b-icon></span>
        </b-input-group-prepend>
    </b-input-group>
</template>

<script>

    export default {
        name: 'Search',
        data: function(){
            return {
                query: this.$route.params.query || ""
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

    .search-area{
        border: solid 1px var(--white);
        border-radius: 5px;
    }
    #search-field{
        border: none;
        background-color: transparent;
        color: var(--white);
    }
    .input-group-text{
        background-color: transparent;
        color: var(--white);
        border: none;
    }
</style>