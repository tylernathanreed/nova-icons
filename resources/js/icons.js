Nova.booting((Vue, router, store) => {

    Vue.component('icon-calendar', require('./components/Calendar'));
    Vue.component('icon-code', require('./components/Code'));
    Vue.component('icon-cogs', require('./components/Cogs'));
    Vue.component('icon-cubes', require('./components/Cubes'));
    Vue.component('icon-database', require('./components/Database'));
    Vue.component('icon-layer-group', require('./components/LayerGroup'));
    Vue.component('icon-logout', require('./components/Logout'));
    Vue.component('icon-project-diagram', require('./components/ProjectDiagram'));
    Vue.component('icon-sort', require('./components/Sort'));
    Vue.component('icon-tasks', require('./components/Tasks'));

});
