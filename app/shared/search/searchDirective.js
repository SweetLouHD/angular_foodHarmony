app.directive('lgSearch', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/search/searchView.html',
    link: function(){
      console.log("Search Loaded.");
    }
  };
});