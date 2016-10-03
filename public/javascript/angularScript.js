var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    
   $http.get('config/configjson.json').success(function(data) {
                    
                      var screenm=data.confi.screenName;
                      $scope.imgurl=data.confi.imgapi;
                      $scope.imgsize=data.confi.imgsize;

    $http.get("https://www.spicinemas.in/chennai/show-times").then(function(response) {


        $scope.CurrentDate = new Date();

         // var a = JSON.stringify(response);
        // document.write(a);
        
     


        var x = filter(response.data.screenSchedules, screenm);
        var refinedList = refineShowtime(x);
       
        $scope.title = (nowShowing(refinedList)["movie"]["name"]);
        $scope.screen = (nowShowing(refinedList)["screenName"]);
        $scope.certifiate = (nowShowing(refinedList)["movie"]["certification"]);
        $scope.time = (nowShowing(refinedList)["sessionDetailsList"]["sessionTiming"]);
        $scope.avail = (nowShowing(refinedList)["sessionDetailsList"]["availability"]["ELITE"]);
        $scope.img = (nowShowing(refinedList)["movie"]["sluggedMovieName"]);

        $scope.title1 = (nextMovie(refinedList)["movie"]["name"]);
        $scope.screen1 = (nextMovie(refinedList)["screenName"]);
        $scope.certifiate1 = (nextMovie(refinedList)["movie"]["certification"]);
        $scope.time1 = (nextMovie(refinedList)["sessionDetailsList"]["sessionTiming"]);
        $scope.avail1 = (nextMovie(refinedList)["sessionDetailsList"]["availability"]["ELITE"]);
        $scope.img1 = (nextMovie(refinedList)["movie"]["sluggedMovieName"]);











    });
    


});
});  

function filter(screenSchedules, screenName) {
    return _.filter(screenSchedules, {
        screenName: screenName
    });
}
