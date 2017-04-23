'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        })
        .constant('EMPTY_CELLS', {
        	'3way': [
                        {
                            ord5r: 0,
                            name: "1",
                            value: ""
                        },
                        {
                            order: 1,
                            name: "x",
                            value: ""
                        },
                        {
                            order: 2,
                            name: "2",
                            value: ""
                        }
                    ],
            doubleChance: [
                        {
                            order: 0,
                            name: "1x",
                            value: ""
                        },
                        {
                            order: 1,
                            name: "12",
                            value: ""
                        },
                        {
                            order: 2,
                            name: "x2",
                            value: ""
                        }
                    ],
            drawNoBet: [
                        {
                            order: 0,
                            name: "1",
                            value: ""
                        },
                        {
                            order: 1,
                            name: "2",
                            value: ""
                        }
                    ],
            bothToScore: [
                        {
                            order: 0,
                            name: "yes",
                            value: ""
                        },
                        {
                            order: 1,
                            name: "no",
                            value: ""
                        }
                    ],
            totalGoals: [
                        {
                            order: 0,
                            name: "under",
                            value: ""
                        },
                        {
                            order: 1,
                            name: "over",
                            value: ""
                        }
                    ],  

        });
}
