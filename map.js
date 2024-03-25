function initMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'ArisYpVHG-7kW0JE9JPaSf8LJ0A6GEUmudzG4J4QWDcd_s0AtQ5n1ORO91H_oCyM' // Utilisez ici votre clé API Bing Maps
    });

    // Coordonnées de Orléans, Loiret
    var orleans = new Microsoft.Maps.Location(47.902964, 1.90925);

    // Centrer la carte sur Orléans
    map.setView({
        center: orleans,
        zoom: 12
    });

    // Création du marqueur pour Orléans
    var marker = new Microsoft.Maps.Pushpin(orleans, {
        title: 'Orléans, Loiret'
    });

    // Ajout du marqueur à la carte
    map.entities.push(marker);
}
