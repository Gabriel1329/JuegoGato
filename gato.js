app.controller("gameController", function($scope) {
  
  $scope.player = 1;
  $scope.table=[
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg"}],
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg" }],
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg" }]];

  $scope.play = function(cell){
    if(!$scope.someWins){
      cell.stat === "images/clear.jpg"? changePlayerMark(cell) : null;
      checkPlayerWin(switchPlayer);
    }
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
    var stat = $scope.player === 1? "images/o.jpg" : "images/x.jpg";
        
    return evalRow(stat,0) || evalRow(stat,1) || evalRow(stat,2)
        || evalCol(stat,0) || evalCol(stat,1) || evalCol(stat,2)
        || evalDiagonal(stat,0) || evalDiagonal(stat,2);
  };

  var evalRow = function(stat,row){
    return evalCell(stat, row, 0) && evalCell(stat, row, 1) && evalCell(stat, row, 2)
  };

  var evalCol = function(stat,col){
    return evalCell(stat, 0, col) && evalCell(stat, 1, col) && evalCell(stat, 2, col)
  };

  var evalDiagonal = function(stat, col){
    if(col === 0){
      return evalCell(stat, 0, 0) && evalCell(stat, 1, 1) && evalCell(stat, 2, 2)
    }
    else if (col === 2){
      return evalCell(stat, 2, 0) && evalCell(stat, 1, 1) && evalCell(stat, 0, 2);
    } 
  };

  var evalCell = function(stat, row, col){
    return $scope.table[row][col].stat === stat;
  };

  $scope.resetValues = function(){
    $scope.player = 1;
    $scope.someWins = false;
    $scope.table=[
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg"}],
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg" }],
    [{stat:"images/clear.jpg"},{stat:"images/clear.jpg"},{stat:"images/clear.jpg" }]];
  }

  $scope.checkTable = function(){
    var col; 
    var row = 0;
    while(row <= 2){
      console.log("row " + row);
      col = 0
      while(col <= 2){
        console.log("col " + col);
        if($scope.table[row][col].stat === "images/clear.jpg"){
          return false;
        }
        col++;
      }
      row++;
    }
    return true;
  };
});
