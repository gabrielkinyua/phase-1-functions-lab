// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start)
    return distanceInFeet * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    }
   else if (distance >= 400 && distance <= 2000) {
    return Math.abs(distance - 400) * 0.02;
   }
   else if (distance > 2000 && distance <= 2500) {
    return 25;
   }
   else {
    return 'cannot travel that far';
   }

}