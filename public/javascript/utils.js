function refineShowtime(list) {
    var result = [];
    list.forEach(function(movie) {
        movie.sessionDetailsList.forEach(function(session) {
            var sessionObject = clone(movie);
            sessionObject.sessionDetailsList = session;
            result.push(sessionObject);
        });
    });
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
    return list[1] || list[0];
};
