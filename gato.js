app.controller("gameController", function($scope) {
  $scope.table=[
  {name:'row1', col1:"images/clear.jpg" ,col2:"images/clear.jpg" ,col3:"images/clear.jpg" },
  {name:'row2', col1:"images/clear.jpg" ,col2:"images/clear.jpg" ,col3:"images/clear.jpg" },
  {name:'row3', col1:"images/clear.jpg" ,col2:"images/clear.jpg" ,col3:"images/clear.jpg" }]


  $scope.play = function(row){
    $scope.table[row].col1 = "images/o.jpg";

  };
});


