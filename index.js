// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers= function(drivers){
    return drivers.slice(2,4);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
selectingDrivers[0](drivers);
selectingDrivers[1](drivers);

function createFareMultiplier(integer){
    return function (fare){
        return integer * fare;
    }
}
const fareMultiplier = createFareMultiplier(2);
fareMultiplier();


const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));


const fareTripler = createFareMultiplier(3);
console.log(fareTripler(12));

function selectDifferentDrivers(arrayOfDrivers, fn){
        return fn (arrayOfDrivers);;
}

const firstTwo = selectDifferentDrivers(drivers,returnFirstTwoDrivers);
firstTwo();
const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);
lastTwo();