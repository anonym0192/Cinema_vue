const key = process.env.VUE_APP_API_KEY;
const basename = process.env.VUE_APP_API_BASEURL;
const image_base = process.env.VUE_APP_IMAGE_BASEURL;

//import lang from "./utils/languages";
import placeholder from './assets/images/No_picture_available.png'


const selectedLanguage = localStorage.getItem('lang') || 'en';

export default {

    getMoviesList: async (type = "popular", page = 1) => {

        const listType = ["now_playing","upcoming","popular"];

        if(!listType.includes(type)){
            return document.location.href = "/";
        }
       
        const res = await fetch(`${basename}/movie/${type}?api_key=${key}&language=${selectedLanguage}&page=${page}`);
        const json = await res.json();
    
        if(!json.results){
            return null;
        }
        
        for(let movie of json.results){
            if(movie['poster_path']){
                movie['poster_path'] = `${image_base}/w500/${movie['poster_path']}`;
            }else{
                movie['poster_path'] = placeholder;
            }
            
        }
        return json;
    },
    
    getMovie: async (id) => {

        const res = await fetch(`${basename}/movie/${id}?api_key=${key}&language=${selectedLanguage}`);

        if( res.status == 404) return null;

        const json = await res.json();

        if(json.status_message){
            return null;
        }
        
        if(json['poster_path']){
            json['poster_path'] = `${image_base}/original/${json['poster_path']}`;
            json['backdrop_path'] = `${image_base}/original/${json['backdrop_path']}`;
        }else{
            json['poster_path'] = placeholder;
        }

        json['production_countries'] = json['production_countries'].map((item)=> item['name']).join(', ');
        
        //json['original_language'] = lang.getLanguageName(json['original_language']);
       
        return json;
    },
    getMovieImages: async (id) => {

        const res = await fetch(`${basename}/movie/${id}/images?api_key=${key}`);
        const json = await res.json()

        if(!json.backdrops || json.backdrops?.length == 0 ){
            return null;
        }

        const images = [];
        
        for(let image of json.backdrops){
            images.push(`${image_base}/original/${image['file_path']}`);
        }

        return images; 
    },

    getSimilarMovies: async (id, page = 1) => {

        const res = await fetch(`${basename}/movie/${id}/similar?api_key=${key}&language=${selectedLanguage}&page=${page}`);
        const json = await res.json();

        if(!json.results || json.results.length === 0){
            return null;
        }
        
        for(let movie of json.results){
            
            if(movie['poster_path']){
                movie['poster_path'] = `${image_base}/w500/${movie['poster_path']}`;
            }else{
                movie['poster_path'] = placeholder;
            }
        }
        return json.results;
    },

    getMovieCast: async (id) => {

        const res = await fetch(`${basename}/movie/${id}/credits?api_key=${key}`);
        const json = await res.json();

        if(!json.cast || json.cast?.length === 0){
            return null;
        }
        
        for(let castMember of json.cast){
            if(castMember['profile_path']){
                castMember['profile_path'] = `${image_base}/w500/${castMember['profile_path']}`;
            } 
        }
       
        return json.cast;
    },

    searchMovie: async (query, page = 1) => {

        const res = await fetch(`${basename}/search/movie?api_key=${key}&query=${query}&language=${selectedLanguage}&page=${page}`);
        const json = await res.json();

        if(!json.results){
            return null;
        }
        
        for(let movie of json.results){
            if(movie['poster_path']){
                movie['poster_path'] = `${image_base}/w500/${movie['poster_path']}`;
            }else{
                movie['poster_path'] = placeholder;
            }
        }
       
        return json;
    }
}



