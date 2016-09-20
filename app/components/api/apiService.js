app.factory('ajaxCall', function() {
	var ajaxCall = {};
	ajaxCall.response = function(location, type, data, contentType, dataType) {
    if(type.length < 1){
      type = 'GET'
    }
    if(data.length < 1 && type != 'GET'){
      data = null;
    }
    if(!contentType || contentType < 1){
      contentType = 'application/json; charset=utf-8';
    }
    if(!datatype || dataType < 1){
      dataType = 'json';
    }
		var jqxhr = $.ajax({
      url: location,
      type: type,
      data: data,
      contentType: contentType,
      dataType: dataType,
      success: function(data, textStatus, jqXHR) {
        return data;
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return errorThrown;
      }
    });
	};
	return ajaxCall;
});