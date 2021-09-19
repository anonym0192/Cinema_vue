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
            console.log('type : ' + to.params.type);
            
            const title = to.params.type ? `${_.startCase(to.params.type?.replace('_',' '))} - Cinema_Vue` : 'Cinema_Vue'; 

            document.title = title;
            break;
        case 'movie':
            document.title = `Movie Info - Cinema_Vue`;
            break;
        case 'search':
            document.title = `${to.params.query} - Cinema_Vue`;
            break; 
    }
    next();
});


export default router;