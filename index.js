var gerechten = ["Macaroni","Lasagna","Soep van de dag","Salade","Friet","Biefstuk","Pizza","Sushi"];
var body = document.getElementById('body');

function showArrayOrdered() {
  for (var i = 0; i < gerechten.length; i++) {
    var ol = document.getElementById('ol');
    var newLi = document.createElement("li");
    var newContent = document.createTextNode(gerechten[i]);
    ol.appendChild(newLi);
    newLi.appendChild(newContent);
  }
}

function showArrayUnordered() {
  for (var i = 0; i < gerechten.length; i++) {
    var ul = document.getElementById('ul');
    var newLi = document.createElement("li");
    var newContent = document.createTextNode(gerechten[i]);
    ul.appendChild(newLi);
    newLi.appendChild(newContent);
  }
}

function showArrayList(list) {
  var listType = document.createElement(list);
  body.appendChild(listType);
  for (var i = 0; i < gerechten.length; i++) {
    var newLi = document.createElement("li");
    var newContent = document.createTextNode(gerechten[i]);
    listType.appendChild(newLi);
    newLi.appendChild(newContent);
  }
}

showArrayOrdered();
showArrayUnordered();
showArrayList('ol');
