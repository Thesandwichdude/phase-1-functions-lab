function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance - 42
    }
    else{
        return 42 - distance
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(distance1, distance2){
    let blocks = "A distance"
    if (distance1 > distance2){
        blocks = distance1 - distance2
    }
    else{
        blocks = distance2 - distance1
    }
    return blocks * 264
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    
    if (distance < 400){
        return 0
    }
    else if (distance < 2000){
        return 2.56
    }
    else if (distance < 2500) {
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}