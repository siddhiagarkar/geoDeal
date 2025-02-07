
const watchID = navigator.geolocation.watchPosition(successCallback, errorCallback, {
    enableHighAccuracy: true,
    timeout: 10000, // Max time to wait for a position (in milliseconds)
    maximumAge: 0 // Accept cached positions up to 0 seconds old
});

const dealer_lat = 19.075984;
const dealer_long = 72.877656;


function successCallback(position)
{

    // document.getElementById("targetlocationdata").innerText = `(${dealer_lat}, ${dealer_long})`;
    const latti = position.coords.latitude;
    const longi = position.coords.longitude;
    // document.getElementById("locationdata").innerText = 
    // `(${latti}, ${longi})`;

    document.getElementById("current").innerText = `(${latti}, ${longi})`;

    const distance = getDistanceFromLatLonInMeters(latti, longi, dealer_lat, dealer_long);

    if(distance<=10)
    {
        console.log("Within 10m so visited! Distance = " + distance+"m");
        // document.getElementById("status").innerText = `DELIVERED!!`;
        document.getElementById("statuss").innerText = `YES`;
        document.getElementById("distt").innerText = `${distance} m`;
        stopTracking(watchID);
    }
    else{
        console.log("Out of range. Did not visit. Distance = " + distance+"m");
        document.getElementById("distt").innerText = `${distance} m`;
        document.getElementById("statuss").innerText = `NO`;
    }
    console.log("Position of agent is (" + latti + "," + longi + ")");
}

function stopTracking(watchID)
{
    navigator.geolocation.clearWatch(watchID);
}

function errorCallback(error) {
    console.error("Error getting the current position!! ", error);
}


function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Radius of Earth in meters
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in meters
}

function toRad(deg) {
    return deg * (Math.PI / 180);
}