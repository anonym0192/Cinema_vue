import api from '../../api';

export default {
	setError({ commit }) {
		commit("setError", true);
		commit("setErrorMessage", "An Error ocorred in requesting the data");
	},
    cleanSelectedMovie({ commit }) {
		commit("setSelectedMovie", {
                data: null,
                cast: null,
                images: [],
                similar_movies: null
        });
		
	},
	async getMovieList({ commit, dispatch, state }, {type , page}) {
		if (state.loading == false) {
            try{

                commit("setLoading", true);
                
                const response = await api.getMoviesList( type, page );
               
                if(!response.results) throw Error;

                commit("setMovieList", {
                    results: response.results,
                    page: response.page,
                    next_page: response.page + 1,
                    total_pages: response.total_pages,
                    total_results: response.total_results
                });
    
            }catch(error){
                dispatch('setError');
                commit("setMovieList", {
                    results: []
                });
            }finally{
                commit("setLoading", false);
            }  
			
		}
    },
    async getMovieById({commit, dispatch, getters}, id){

        try{

            commit("setLoading", true);

            const movie = await api.getMovie(id);
            const cast = await api.getMovieCast(id);
            const images = await api.getMovieImages(id);
            const similar_movies = await api.getSimilarMovies(id);

            commit("setSelectedMovie", {
                data: movie,
                cast: cast,
                images: images,
                similar_movies: similar_movies
            });

        }catch(error){
            console.error(error.message);
            dispatch('setError');
            dispatch('cleanSelectedMovie');
        }finally{
            commit("setLoading", false);
            document.title = `${getters['getMovieTitle']} - VueMovies`;
        }  
    },

    async searchMovie({commit, dispatch}, {query, page}){

        try{
            commit("setLoading", true);

            const response = await api.searchMovie(query, page);

            if(!response.results)
                throw Error

            
            commit("setMovieList", {
                results: response.results,
                page: response.page,
                next_page: response.page + 1,
                total_pages: response.total_pages,
                total_results: response.total_results
            });

        }catch(error){
            dispatch('setError');
            commit("setMovieList", {
                results: []
            });
        }finally{
            commit("setLoading", false);
        }  
    }
};