<template>
    <main class="bg-secondary">
        <div class="container">

            <movie-list-skeleton v-if="loading" />

            <section v-else class="movies-list">
                <div class="row">
                    <movie-item v-for="movie in movieList.results" :key="movie.id" :movie="movie"  />
                </div>          
            </section>
            <div v-show="movieList.total_pages > 1" class="pagination-area">
                <b-pagination-nav
                    :number-of-pages="movieList.total_pages"
                    base-url="?page="
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                    :value="movieList.page"
                    use-router
                ></b-pagination-nav>
            </div>
        </div>
    </main>
</template>

<script>

    import MovieItem from '../components/MovieItem';
    import MovieListSkeleton from '../skeletons/MovieListSkeleton';
    import { mapState , mapActions } from 'vuex';

    export default {
        name: 'Home',
        data: function(){
            return {
            }
        },
        methods:{
            ...mapActions('movieData',['getMovieList'])
        },
        components: {
            MovieItem, MovieListSkeleton
        },
        computed: {
            ...mapState('movieData', ['movieList', 'loading', 'error', 'errorMsg'])
        },
        mounted: async function(){
            
            await this.getMovieList({
                    type: this.$route.params.type, 
                    page: this.$route.query.page
                });
            console.log(this.movieList);
        },

        watch: {
            async $route(){

                 this.getMovieList({
                    type: this.$route.params.type, 
                    page: this.$route.query.page
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

    .col-sm-12{
        height: auto;
    }

    .pagination-area{
        display: flex;
        justify-content: center;
        padding-top: 50px;
        overflow: auto;
    }

</style>