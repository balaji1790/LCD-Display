

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) 
{

    
   $http.get("https://www.spicinemas.in/chennai/show-times").then(function(response) {
       

         $scope.CurrentDate = new Date();
         
        
      

   var x= _.filter(response.data.screenSchedules, { screenName : 'KITES' });
             
                  //document.write(x[0]["movie"]["name"]);
               //document.write(x[0]["movie"]["synopsis"]);
               //document.write(x[0]["screenName"]);
               //document.write(x[0]["movie"]["certification"]);
               
             $scope.title = (x[0]["movie"]["name"]);
             $scope.screen= (x[0]["screenName"]);
             $scope.certifiate=(x[0]["movie"]["certification"]);
             $scope.time=(x[0]["sessionDetailsList"][0]["sessionTiming"]);
              $scope.avail=(x[0]["sessionDetailsList"][0]["availability"]["ELITE"]);
              
             $scope.title1 = (x[1]["movie"]["name"]);
             $scope.screen1= (x[1]["screenName"]);
             $scope.certifiate1=(x[1]["movie"]["certification"]);
             $scope.time1=(x[1]["sessionDetailsList"][0]["sessionTiming"]);
              $scope.avail1=(x[1]["sessionDetailsList"][0]["availability"]["ELITE"]);
               
               
              //var a = JSON.stringify(x);
               //document.write(a);
               
              // var jsonArg1 = new Object();
               //jsonArg1.
             
                            

                           
                //var b= JSON.stringify(show_numbers);
      
                //document.write(b);
        
         
      
             
                  
            
            
          
          
 
 
          
           
}); 
        
            
});