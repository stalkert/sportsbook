'use strict';


import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';


function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/main/defaultTitle');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);

