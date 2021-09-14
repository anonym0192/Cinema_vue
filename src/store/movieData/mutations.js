export default {
    setMovieList(state, movieList) {
		state.movieList = movieList;
    },
    setSelectedMovie(state, selectedMovie) {
		state.selectedMovie = selectedMovie;
	},
	setError(state, error) {
		state.error = error;
	},
	setErrorMessage(state, errorMessage) {
		state.errorMessage = errorMessage;
	},
	setLoading(state, isLoading) {
		state.loading = isLoading;
	}
}