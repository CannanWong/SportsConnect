export function distance (eventLoc, mapLoc) {
    const lat1 = eventLoc.latitude
    const lon1 = eventLoc.longitude
    const lat2 = mapLoc.lat()
    const lon2 = mapLoc.lng()

    // Calculate distance between two points in km given their latitude and longitude
    // Haversine formula
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2-lat1)
    const dLon = deg2rad(lon2-lon1)
    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        (Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2))

    const d = 2 * R * Math.asin(Math.sqrt(a))
    return d    
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}
