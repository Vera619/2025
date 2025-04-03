function init () {

}
function ShouMap () {
    let address = document.getElementById('addr-field').value;
    let city = document.getElementById('city-field').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    let iframeElement = document.getElementById('map-frame');
     iframeElement.src = place;
     console.log(place);
}
