const updateDogs = async () => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://dog.ceo/api/breeds/image/random", false ); // false for synchronous request
    xmlHttp.send( null );
    document.getElementById('dog_image').src = JSON.parse(xmlHttp.responseText).message
};

window.setInterval(updateDogs, '1000');


