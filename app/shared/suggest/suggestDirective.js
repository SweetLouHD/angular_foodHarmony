app.directive('lgSuggest', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/suggest/suggestView.html',
    link: function(){
      console.log("Suggest Loaded.");
    }
  };
});