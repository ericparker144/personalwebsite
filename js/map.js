function initMap() {

    var map_center = {
        lat: 42.777007,
        lng: -81.644897
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: map_center,
        scrollwheel: false
    });

    // University of Windsor Marker/InfoWindow
    var uwindsor = {
        lat: 42.304527,
        lng: -83.062027
    };

    var uwindsor_marker = new google.maps.Marker({
        position: uwindsor,
        map: map
    });

    var uwindsor_content = '<div id="content" class="modal-body">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Ed Lumley Center for Engineering Innovation (CEI)</h1>' +
            '<div id="bodyContent">' +
            '<p>This building is home to all engineering students at the University of Windsor. ' +
            'It is the place where I designed, fabricated, and tested both the Energy Harvesting Exercise Machine and the Pre-Shower Water Heater, ' +
            'as well as fostered my electrical engineering background. I continue to contribute to research efforts stationed within this building by ' + 
            'providing academic services for professors including performing circuit simulations and proofreading research papers.</p>' +
            '</div>' +
            '</div>';

    var uwindsor_infowindow = new google.maps.InfoWindow({
        content: uwindsor_content
    });

    uwindsor_marker.addListener('click', function () {
        uwindsor_infowindow.open(map, uwindsor_marker);
    });

    // BlackBerry Marker/InfoWindow
    var bberry = {
        lat: 43.517162,
        lng: -80.513692
    };

    var bberry_marker = new google.maps.Marker({
        position: bberry,
        map: map
    });

    var bberry_content = '<div id="content" class="modal-body">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">BlackBerry Headquarters</h1>' +
            '<div id="bodyContent">' +
            '<p>This is Building B located at the BlackBerry world headquarters in Waterloo, ON. This is where I currently work as a co-op student contributing as a web software developer.</p>' +
            '</div>' +
            '</div>';

    var bberry_infowindow = new google.maps.InfoWindow({
        content: bberry_content
    });

    bberry_marker.addListener('click', function () {
        bberry_infowindow.open(map, bberry_marker);
    });

    // WAP Marker/InfoWindow
    var wap = {
        lat: 42.301024,
        lng: -82.987096
    };

    var wap_marker = new google.maps.Marker({
        position: wap,
        map: map
    });

    var wap_content = '<div id="content" class="modal-body">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Chrysler Windsor Assembly Plant (WAP)</h1>' +
            '<div id="bodyContent">' +
            '<p>This is the location of my first co-op job, and it is where every single Dodge Grand Caravan, Chrysler Pacifica, and Chrysler Town and Country vehicle in the world is manufactured. ' + 
            'The manufacturing facility is over 4.4 million square feet, employs over 5,800 people, and a newly completed vehicle rolls off the line every 42 seconds.</p>' +
            '</div>' +
            '</div>';

    var wap_infowindow = new google.maps.InfoWindow({
        content: wap_content
    });

    wap_marker.addListener('click', function () {
        wap_infowindow.open(map, wap_marker);
    });

    // Essex Energy Corporation Marker/InfoWindow
    var eec = {
        lat: 42.231968,
        lng: -82.966398
    };

    var eec_marker = new google.maps.Marker({
        position: eec,
        map: map
    });

    var eec_content = '<div id="content" class="modal-body">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Essex Energy Corporation</h1>' +
            '<div id="bodyContent">' +
            '<p>This is the location of my second co-op job. Essex Energy is an engineering consulting firm providing expertise in the areas of energy management and conservation as well as distributed generation. ' + 
            'I worked for the software development division responsible for producing engineering analysis software for use by power engineers to ' + 
            'track electrical distribution asset information and perform engineering analysis based on real-time data.</p>' +
            '</div>' +
            '</div>';

    var eec_infowindow = new google.maps.InfoWindow({
        content: eec_content
    });

    eec_marker.addListener('click', function () {
        eec_infowindow.open(map, eec_marker);
    });

    google.maps.event.addListener(map, 'mouseout', function () {
        this.setOptions({ scrollwheel: false });
    });
    map.addListener('click', function () {
        map.set('scrollwheel', true);
    });
    map.addListener('dragstart', function () {
        map.set('scrollwheel', true);
    });
}