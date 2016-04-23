
/* Home Page loading js */
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $("#menu-toggle").show();
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(this).hide();
});

/* Get Work History Json Data Information */
function ResumeDataInfoCtrl($scope, $http) {
    $http.get('jsondata/resumedata.json').success(function(data) {
        $scope.workhistorys = data.WorkHistorys;
        $scope.skills = data.Skills;
        $scope.selfEvaluations = data.SelfEvaluations;
        $scope.experiences = data.Experiences;
    });
};