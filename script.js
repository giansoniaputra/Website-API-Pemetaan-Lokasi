$(document).ready(function () {
    let lokasi = document.querySelectorAll("#lokasi")
    let hasil = []
    let nama = []
    lokasi.forEach((a) => {
        let split = a.value.split("/")
        if (split[1] !== undefined && split[2] !== undefined) {
            hasil.push([split[1], split[2]]);
            nama.push([split[0]])
        }
    })
    console.log(nama[1]);
    let coordinates = hasil;

    let mymap = L.map('map').setView([-7.4326219, 108.1987931], 10); // Set view pada salah satu koordinat

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mymap);

    // Tambahkan marker untuk setiap koordinat
    for (let i = 0; i < coordinates.length; i++) {
        let marker = L.marker(coordinates[i]).addTo(mymap);
        marker.bindPopup(nama[i][0]);
    }
    // coordinates.forEach((a, b) => {
    //     let marker = L.marker(coordinates[b]).addTo(mymap);
    //     marker.bindPopup(b);
    // })
})
