app.controller('sampledatacontroller',function($scope){//it is a javascript function,scope object is used to invoke controller
$scope.firstname="Pranitha11";
$scope.lastname="Chittoju";
$scope.empnums=[1,2,3,4,5];
$scope.empnames=['pranitha','phani','smruthi','pooja'];
$scope.empobject={empfname:'John',emplname:'Doe'};
$scope.arrayofobjects=[{empf:'aaa',empl:'bbb'},{empf:'ccc',empl:'ddd'}]
$scope.changefname=function()
{
$scope.firstname="Prani";
}
$scope.getfullname=function(){
return $scope.firstname+" "+$scope.lastname;
}

})
app.directive("w3TestDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});