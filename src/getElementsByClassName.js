// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];

  function iterator(element) {
  	//check if the current element has a class list and if the class list contains the target class name
  	if (element.classList && element.classList.contains(className)) {
  		//push nodes with matching class names to the results array
  		results.push(element);
  	};
  	//loop through all of the child nodes of the given node and recursively call the iterator function on each
  	for (let i = 0; i < element.childNodes.length; i++){
  		iterator(element.childNodes[i]);
  	}
  }

 	iterator(document.body);
 	return results;
};
