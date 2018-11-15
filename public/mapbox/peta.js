var mymap = L.map('mapid').setView([-0.033770, 109.341572], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
    attribution: 'Map data',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5kcmVhc2NocmlzdDI3IiwiYSI6ImNqbnpnajg2djA2eTAza21xOTFqYWllZnAifQ.YhxoV7-rhe5OAsdsgwl9NQ'
}).addTo(mymap);

function findLocation(x,y){
    for(var i=0; i < places.length; i++){
        if(places[i].lokasi[0] == x && places[i].lokasi[1] == y){
            return i;
        }
    }
    return -1;
}
function showLocation(e){
    let ix = findLocation(e.latlng.lat,e.latlng.lng);
    if(ix >= 0){
        img.src = places[ix].gambar;
        img.className  = "center";
        par.textContent = places[ix].review;
    }
}
let gmb = document.getElementById('gmb');
let rev = document.getElementById('review');
let img = document.createElement('img');
let par = document.createElement('p');

gmb.appendChild(img);
rev.appendChild(par);

let r0 = "Warung kopi aming, enak harga bersahabat";
let r1 = "Abang Kepiting, seafood enak";
let r2 = "Asiang, warung kopi para pejabat";

let places = [
    {
        'lokasi': [-0.030835, 109.342353],
        'sponsor': 'Aming Cofee',
        'gambar': '/images/aming.jpg',
        'review': r0
    },
    {
        'lokasi': [-0.036235, 109.344265],
        'sponsor': 'Abang Kepiting',
        'gambar': '/images/abangkepiting.jpg',
        'review': r1
    },
    {
        'lokasi': [-0.028761, 109.340853],
        'sponsor': 'Aming Cofee',
        'gambar': '/images/asiang.jpg',
        'review': r2
    }
];
for ( var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
    marker.on('click',showLocation);
}