var assert = require('assert');
var utils = require('../public/javascript/utils')

describe('refineShowtime', function() {
    it('refines the given json', function() {
        var sampleJson = [{
            movie: "movie1",
            sessionDetailsList: [{
                "showNames": "Evening",
                "showNumbers": 4
            }, {
                "showNames": "Night",
                "showNumbers": 5
            }]
        }, {
            movie: "movie2",
            sessionDetailsList: [{
                "showNames": "Noon",
                "showNumbers": 2
            }]
        }, {
            movie: "movie3",
            sessionDetailsList: [{
                "showNames": "Special show",
                "showNumbers": 1
            }]
        }];

        var expected = [{
            movie: "movie3",
            sessionDetailsList: {
                "showNames": "Special show",
                "showNumbers": 1
            }
        }, {
            movie: "movie2",
            sessionDetailsList: {
                "showNames": "Noon",
                "showNumbers": 2
            }
        }, {
            movie: "movie1",
            sessionDetailsList: {
                "showNames": "Evening",
                "showNumbers": 4
            }
        }, {
            movie: "movie1",
            sessionDetailsList: {
                "showNames": "Night",
                "showNumbers": 5
            }
        }]
        assert.deepEqual(expected, utils.refineShowtime(sampleJson))
    });
});
