app.directive('lgFooter', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/footer/footerView.html',
    link: function(){
      console.log("Footer Loaded.");
    }
  };
});