app.controller("gameController", function($scope) {
  
  $scope.player = 1;

  $scope.table=[
  [{stat:"images/x.jpg"},{stat:"images/o.jpg"},{stat:"images/x.jpg"}],
  [{stat:"images/x.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg" }],
  [{stat:"images/clear.jpg"},{stat:"images/o.jpg"},{stat:"images/clear.jpg" }]];

  $scope.play = function(cell){
    cell.stat === "images/clear.jpg"? changePlayerMark(cell) : null;

    checkPlayerWin(switchPlayer);
  };

  $scope.changePlayer = function(cell){
    changePlayerMark(cell);
  };

  var changePlayerMark = function(cell){
    cell.stat = $scope.player === 1? "images/o.jpg" : "images/x.jpg";
  };

  var switchPlayer = function(){
    $scope.player = $scope.player === 1? 2 : 1;
  };

  var checkPlayerWin = function(callBackFn){
    $scope.someWins = evaluate();
    if(callBackFn && !$scope.someWins){
      callBackFn();
    }
  };


  var evaluate = function(){
    /*var validation = $scope.player == 1? true : false;
    return validation;*/
    var eval;
    var stat = $scope.player === 1? "images/o.jpg" : "images/x.jpg";
    eval = ($scope.evalCell(stat, 0, 0) && $scope.evalCell(stat, 1, 0) && $scope.evalCell(stat, 2, 0))
        || ($scope.evalCell(stat, 0, 1) && $scope.evalCell(stat, 1, 1) && $scope.evalCell(stat, 2, 1))
        || ($scope.evalCell(stat, 0, 2) && $scope.evalCell(stat, 1, 2) && $scope.evalCell(stat, 2, 2))
        || ($scope.evalCell(stat, 0, 0) && $scope.evalCell(stat, 0, 1) && $scope.evalCell(stat, 0, 2))
        || ($scope.evalCell(stat, 1, 0) && $scope.evalCell(stat, 1, 1) && $scope.evalCell(stat, 1, 2))
        || ($scope.evalCell(stat, 2, 0) && $scope.evalCell(stat, 2, 1) && $scope.evalCell(stat, 2, 2))
        || ($scope.evalCell(stat, 0, 0) && $scope.evalCell(stat, 1, 1) && $scope.evalCell(stat, 2, 2))
        || ($scope.evalCell(stat, 2, 0) && $scope.evalCell(stat, 1, 1) && $scope.evalCell(stat, 0, 2));      
    return eval;
  };

  $scope.evalCell = function(stat, row, col){
    return $scope.table[row][col].stat === stat;
  };
});

//prueba 
