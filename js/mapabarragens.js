
            // Inicialização do mapa
var map = L.map('map').setView([-15.550520, -48.633309], 4);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    minZoom: 4,
    maxZoom: 10,    
    id: 'volt.o4glepp8',
    accessToken: 'pk.eyJ1Ijoidm9sdCIsImEiOiJZZ1VxNUVFIn0.U4NKMcfdvvLUfEqAzB7aWA'
}).addTo(map);


    // Acrescenta os dados GeoJson 50 usuarios
    
    var markericon = new L.Icon({
        iconUrl:'../imagens/damred.png',
        iconSize: [17, 17]    
    });

    function dam (feature, layer) {
        layer.bindPopup 
        ("<h2>" + feature.properties.Barragem +"</h2><p class='infowindow'><strong>Estado:</strong> " + feature.properties.Estado +"</p><p class='infowindow'><strong>Custo: </strong>R$ " + feature.properties["Custo (milhões R$)"] +" milhões</p><p class='infowindow'><strong>Início das operações: </strong>" + feature.properties.Operação +"</p><p class='infowindow'> <strong>População atingida (estimativa):</strong> " + feature.properties["População atingida"] +"</p><p class='infowindow'><strong>Área inundada: </strong> " + feature.properties["Área Inundada"] +"</p> <p class='infobs'><strong>Observação: </strong> " + feature.properties.OBS +"</p><p class='infobs'><em>Fonte: <a href='http://www.observabarragem.ippur.ufrj.br/' target='_blank'>Observatório Sócio-Ambiental da Barragens/UFRJ</a><em></p>");
        layer.setIcon (markericon)
    };

    L.geoJson(barragens, {
        onEachFeature: dam
    }).addTo(map);

    function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
};
    


