var app = angular.module("gameApp", []);
var i =0;

app.controller("gameCtrl", function($scope){
    $scope.points =0;
    $scope.page = quiz[i];
    $scope.flagan=false;


    $scope.select = function(o){
    	$scope.answer=o;
    	};
    $scope.doQuiz = function(){
      $scope.quizflag=true;
      $scope.flagan=true; 
    };
    $scope.NextQuestion = function(){
    	if($scope.answer===$scope.page.correct){
    		$scope.points++;
      }
    i++;
    $scope.page = quiz[i];
      if($scope.page===undefined){
      	$scope.hej="Grattis du fick " + $scope.points + " av " + quiz.length +" poäng!";
    	  $scope.flag=true; 
      }
    };
});

