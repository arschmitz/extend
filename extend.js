// JavaScript Document
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
//create local 
var extend = function(obj,extObj) {
		//if more then 2 arguments passed combine into target object (first)
	  	if(arguments.length > 2){
			for(var a = 1; a < arguments.length; a++){
				//make recursive call with only to arguments to combine these 
				extend(obj,arguments[a]);
			}	
		} else {
			//combine 2 objects
			for(var i in extObj){
				obj[i] = extObj[i];
			}
		}
		//return target object
		return obj;
	  };
window.extend = extend;
})( window );