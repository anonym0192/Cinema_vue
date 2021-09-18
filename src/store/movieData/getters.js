export default {
    getMovieTitle(state){
        return state.selectedMovie.data?.title || '';
    }
}