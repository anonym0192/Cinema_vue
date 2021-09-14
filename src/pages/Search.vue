<template>
    <main>
        <div class="container">  
            <movie-list-skeleton v-if="loading" />

            <section v-else class="movies-list">
                    <h1>Results for : {{$route.params.query}}</h1>
                    <div class="row">
                        <movie-item v-for="movie in movieList.results" :key="movie.id" :movie="movie"  />
                    </div>
            </section>
        </div>
    </main>
</template>

<script>

    import MovieItem from '../components/MovieItem';
    import MovieListSkeleton from '../skeletons/MovieListSkeleton';
    import { mapState , mapActions } from 'vuex';
    
    export default {
        name: 'Search',
        components: {
            MovieItem, MovieListSkeleton
        },
        data: function(){
            return {
            }
        },
        computed:{
            ...mapState('movieData', ['movieList', 'loading', 'error', 'errorMsg'])
        },
        methods:{
            ...mapActions('movieData',['searchMovie'])
        },
        mounted: function(){
            
            this.searchMovie({
                query: this.$route.params.query,
                page: this.$route.query.page || 1
            });
        },
        watch: {
            $route(){
                this.searchMovie({
                    query: this.$route.params.query,
                    page: this.$route.query.page || 1
                });
            }
        }
    }
</script>

<style scoped>
    main{
        padding: 50px 0;
        min-height: 90vh;
    }
</style>