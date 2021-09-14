import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import _ from 'lodash';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      {path: '/search/:query', component: Search, name: 'search'},
      {path: '/movie/:id', component: Movie, name: 'movie'},
      {path: '/:type', component: Home, name:'home'},
      {path: '*', redirect: {name: 'home'}}
    ]
  });

router.beforeEach((to, from, next) => {

    switch(to.name){
        case 'home':          
            document.title = `${_.startCase(to.params.type?.replace('_',' '))} - VueMovies`;
            break;
        case 'movie':
            document.title = `Movie Info - VueMovies`;
            break;
        case 'search':
            document.title = `${to.params.query} - VueMovies`;
            break; 
    }
    next();
});


export default router;