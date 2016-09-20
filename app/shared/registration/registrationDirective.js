app.directive('lgRegistration', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/registration/registrationView.html',
    link: function(){
      console.log("Registration Loaded.");
    }
  };
});