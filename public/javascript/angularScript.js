var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {


    // $http.get("https://www.spicinemas.in/chennai/show-times").then(function(response) {
    $http.get("http://0.0.0.0:8000/public/sample.json").then(function(response) {


        $scope.CurrentDate = new Date();

        // var a = JSON.stringify(response);
        // document.write(a);

        console.log(response.data)

        var x = filter(response.data.screenSchedules, "WEAVE");

        //document.write(x[0]["movie"]["name"]);
        //document.write(x[0]["movie"]["synopsis"]);
        //document.write(x[0]["screenName"]);
        //document.write(x[0]["movie"]["certification"]);
        var refinedList = refineShowtime(x);
        console.log(nowShowing(refinedList))
        $scope.title = (nowShowing(refinedList)["movie"]["name"]);
        $scope.screen = (nowShowing(refinedList)["screenName"]);
        $scope.certifiate = (nowShowing(refinedList)["movie"]["certification"]);
        $scope.time = (nowShowing(refinedList)["sessionDetailsList"]["sessionTiming"]);
        $scope.avail = (nowShowing(refinedList)["sessionDetailsList"]["availability"]["ELITE"]);

        $scope.title1 = (nextMovie(refinedList)["movie"]["name"]);
        $scope.screen1 = (nextMovie(refinedList)["screenName"]);
        $scope.certifiate1 = (nextMovie(refinedList)["movie"]["certification"]);
        $scope.time1 = (nextMovie(refinedList)["sessionDetailsList"]["sessionTiming"]);
        $scope.avail1 = (nextMovie(refinedList)["sessionDetailsList"]["availability"]["ELITE"]);


        // var a = JSON.stringify(x);
        // document.write(a);

        // var jsonArg1 = new Object();
        //jsonArg1.




        //var b= JSON.stringify(show_numbers);

        //document.write(b);









    });


});

function filter(screenSchedules, screenName) {
    return _.filter(screenSchedules, {
        screenName: screenName
    });
}
