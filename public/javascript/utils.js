function refineShowtime(list) {
    var result = []
    for (var movie of list) {
        for (var session of movie.sessionDetailsList) {
            var sessionObject = clone(movie);
            sessionObject.sessionDetailsList = session;
            result.push(sessionObject);
        };
    };
    return result.sort(function(a, b) {
        return a.sessionDetailsList.showNumbers - b.sessionDetailsList.showNumbers;
    });
};

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
};

function nowShowing(list) {
    return list[0];
};

function nextMovie(list) {
    return list[1];
};
exports.refineShowtime = refineShowtime;
