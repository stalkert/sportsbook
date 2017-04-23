'use strict';

export default function (app) {
    app
        .factory('query', queryFactory);

    function queryFactory ($resource) {
        "ngInject";
        return  $resource(':action',
                    {
                        action: '@action'
                    },
                    {
                        getTree: {
                            method : 'GET',
                            params : {
                                action: 'tree.json'
                            }
                        },

                        getLayout: {
                                method : 'GET',
                                    params : {
                                    action: 'layout.json'
                                }
                            },
                        getMatches: {
                                method : 'GET',
                                    params : {
                                    action: 'matches.json'
                                }
                        }
                    }
        );
    }
}
