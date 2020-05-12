// MAP LEAFLET
var mymap = L.map('mapid').setView([48.803956, 2.396339], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(mymap);

L.marker([48.803156, 2.396339]).addTo(mymap).bindPopup("Willy Zhou<br/>26 Avenue de la République<br/>94200 Ivry-sur-Seine").openPopup();



// NAVBAR
function classToggle() {
    const navs = document.querySelectorAll('.navbar__items')
    
    navs.forEach(nav => nav.classList.toggle('navbar__toggleShow'));
  }
  
document.querySelector('.navbar__link-toggle').addEventListener('click', classToggle);
  