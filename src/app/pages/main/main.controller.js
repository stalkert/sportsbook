'use strict';


import  _ from 'lodash/core';




import moment from 'moment';


import angularLogo from '_images/angular.png';

function MainController($log, $scope, query, EMPTY_CELLS, tree, layout, $stateParams) {
  'ngInject';
    $scope.tree = tree.data;
    $scope.layout = layout.data;
    query.getMatches({id: $stateParams.id}).$promise
        .then( response => {
            let matches = response.data;
            matches.forEach(match => {
                let time = moment(match.sd);
                match.sd = time.format('MM-DD HH:mm');
                match.order = time.unix();
                if(!match.odds['3way']){
                    match.odds['3way'] = EMPTY_CELLS['3way'];
                }
                if(!match.odds.doubleChance){
                    match.odds.doubleChance = EMPTY_CELLS.doubleChance;
                }
                if (!match.odds.drawNoBet) {
                    match.odds.drawNoBet = EMPTY_CELLS.drawNoBet;
                }
                if (!match.odds.bothToScore) {
                    match.odds.bothToScore = EMPTY_CELLS.bothToScore;
                }
                if(!match.odds.totalGoals) {
                    match.odds.totalGoals = EMPTY_CELLS.totalGoals;
                }
                match.odds['3way'].forEach( item => {
                    order(item);
                });
                match.odds.doubleChance.forEach( item => {
                    order(item);
                });
                match.odds.drawNoBet.forEach( item => {
                    order(item);
                });
                 match.odds.bothToScore.forEach( item => {
                    order(item);
                });
                match.odds.totalGoals.forEach( item => {
                    order(item);
                });
            });
            $scope.matches = matches;
        });
     function order(item) {
        switch(item.name){
            case "1":
            case "1x":
            case "yes":
            case "under":
                item.order = 0;
                break;
            case "2":
            case "x2":
            case "no":
            case "over":
                item.order = 2;
                break;
            case "x":
            case "12":
                item.order = 1;
                break;                
        }
     }
}

export default MainController;
