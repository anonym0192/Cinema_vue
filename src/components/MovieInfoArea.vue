<template>
    <section v-if="movie" class="info-section" 
        :style="movie.poster_path ? `background-image: url('${movie.poster_path}')` : ''">
        <transition enter-active-class="animated fadeIn" leave-active-class="">
            <div class="movie-panel" :key="movie.id">
                
                <img class="movie-poster col-md-5 col-12"
                    :alt="movie.title"
                    v-if="movie.poster_path"
                    :src="movie.poster_path"/>
                
                <div class="movie-info col-md-7 col-12">
                    <h2 :key="movie.id">{{movie.title}}</h2> 
                    <p class="text-wrap overflow-auto">{{movie.overview}}</p>
                    <p v-if="movie.genres">
                        <strong>Genres: </strong>
                        <b-badge v-for="genre in movie.genres" :key="genre.id" class="text-light mx-1 py-2" style="background-color: var(--indigo)">
                            {{genre.name}}
                        </b-badge>
                    </p> 
                    <p><strong>Original Language: </strong>{{movie.original_language}}</p>
                    <p v-if="movie.production_countries.length > 0">
                        <strong>Country: </strong>{{movie.production_countries[0].name}}
                    </p>
                    <p v-if="movie.vote_average">
                        <strong>Rating: </strong> 
                        <meter min="0" max="100" optimum="100" low="40" high="70" :value="movie.vote_average*10"></meter> 
                        {{movie.vote_average}}
                    </p> 
                    <p v-if="movie.homepage">
                        <strong>Homepage: </strong>
                        <a :href="movie.homepage">{{movie.homepage}}</a>
                    </p>
                </div>
            </div>
        </transition>
        <div class="movie-meta">
            <span><b-icon icon="calendar"></b-icon> Release Date {{movie.release_date}}</span>
            <span><b-icon icon="clock"></b-icon> Duration {{movie.runtime}}</span>
            <span><b-icon icon="cash"></b-icon> Budget {{movie.budget}}</span>
        </div> 
    </section>
</template>
<script>
export default {
    props: ['movie']
}
</script>
<style scoped>

    .info-section{
        background-color: #000000b8;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .movie-panel{
        display: flex;
        flex-wrap: wrap;
        background: linear-gradient(45deg, black, #000000ab);
        max-height: 600px;
    }

    .movie-poster{
        width: 300px;
        max-height: inherit;
        min-height: 300px;
    }

    .movie-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #ffffffd1;
        padding: 25px 0;
        font-size: 18px;
        overflow-wrap: break-word;
        overflow: auto;
        max-height: inherit;
    }

   .movie-meta{
        padding: 20px 15px;
        display: flex;
        justify-content: space-around;
        background-color: #000;
        color: #ffffffb3;
    }

    .movie-info a{
        text-decoration: none;
        color: inherit;
    }

@media screen and (max-width: 768px){

    .movie-panel{
        max-height: none;
    }
    .movie-info{
        padding: 25px;
    }
    .movie-meta{
        flex-direction: column;
    }
    .movie-meta span{
        padding: 10px 0;
        border-bottom: 1px solid;
    }
}
</style>