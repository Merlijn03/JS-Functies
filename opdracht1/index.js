var gerechten = ["Macaroni","Lasagna","Soep van de dag","Salade","Friet","Biefstuk","Pizza","Sushi"];
var uitvoer = document.getElementById('uitvoer');
var menu = [];

function showArray() {
  for (var i = 0; i < gerechten.length; i++) {
    console.log(gerechten[i]);
  }
}

function printElement(number) {
  uitvoer.innerHTML = gerechten[number];
}

function returnElement() {
  return gerechten[5];
}

showArray();
printElement(3);
menu.push(returnElement());
