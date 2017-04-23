'use strict';

import mainTpl from './main.html';
import mainController from './main.controller';
import matchesTpl from '../matches/matches.html';
import defaultTitleTpl from '../matches/defaultTitle.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      	url: '/main',
      	templateUrl: mainTpl,
      	controller: mainController,
      	resolve: {
      		tree:['query', function(query){
      			return query.getTree().$promise
      		}],
      		layout:['query', function(query){
      			return query.getLayout().$promise
      		}]      		
      	}
    })
    .state('main.default', {
      	url: '/defaultTitle',
		templateUrl:defaultTitleTpl,
      	controller: mainController
    })
    .state('main.matches', {
      	url: '/matches/:id',
      	templateUrl: matchesTpl,
      	controller: mainController
    });

}

export default routeConfig;
