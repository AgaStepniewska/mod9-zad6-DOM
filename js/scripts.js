var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listElem = document.getElementsByTagName('li');
//dodanie listenera do buttona:
add.addEventListener('click', function(e) {
	var newElem = document.createElement('li');
	newElem.innerHTML = 'Item ' + listElem.length;
	list.appendChild(newElem);
});
