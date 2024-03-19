	
	function initMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'ArisYpVHG-7kW0JE9JPaSf8LJ0A6GEUmudzG4J4QWDcd_s0AtQ5n1ORO91H_oCyM' // Utilisez ici votre clé API Bing Maps
    });

   // Coordonnées de Orléans, Loiret
        var orleans = { lat: 47.902964, lng: 1.90925 };
        
        // Création de la carte centrée sur Orléans
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10, // Niveau de zoom
            center: orleans // Centre de la carte
        });

        // Marqueur pour Orléans
        var marker = new google.maps.Marker({
            position: orleans,
            map: map,
            title: 'Orléans, Loiret'
        });
}
