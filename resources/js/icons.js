Nova.booting((Vue, router, store) => {

    Vue.component('icon-calendar', require('./components/Calendar'));
    Vue.component('icon-cogs', require('./components/Cogs'));
    Vue.component('icon-layer-group', require('./components/LayerGroup'));
    Vue.component('icon-logout', require('./components/Logout'));
    Vue.component('icon-sort', require('./components/Sort'));

});
