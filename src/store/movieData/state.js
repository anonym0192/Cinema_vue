export default {
    movieList: {
        results: [],
        page: 1,
        next_page: null,
        total_pages: null,
        total_results: null
    },
    selectedMovie: {
        data: null,
        cast: null,
        images: [],
        similar_movies: null,
    },
    loading: false,
    error: false,
    errorMsg: ''
}