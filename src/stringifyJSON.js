// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  function transformToString(obj) {
  	if (obj === null){
  		result = result + null;
  	}

  	else if (typeof obj === 'object') {
  		if (Array.isArray(obj)) {
  			result = result + '[';
  			obj.forEach(function(el) {
  				transformToString(el);
  				if (obj.indexOf(el) !== obj.length - 1){
  					result += ',';
  				}
  			});
  			result = result + ']'
  		} else {
  			result = result + '{';
  			var objSize = 0;
  			for (var key in obj) {
  				if (key !== 'functions' && key !== 'undefined'){
  					transformToString(key);
  					result += ':';
  				}
  				if (obj[key] !== undefined && (!(obj[key] instanceof Function))) {
  					transformToString(obj[key]);
  					objSize++;
  					if(objSize !== Object.keys(obj).length) {
  						result += ',';
  					}
  				}
  			}
  			result = result + '}';
  		}
  	}

  	else if (typeof obj === 'string'){
  		result += '"' + obj + '"';
  	}

  	else if (typeof obj === 'number'){
  		result += obj.toString();
  	}

  	else if (typeof obj === 'boolean'){
  		result += obj;
  	}
  }
  transformToString(obj);
  return result;
};