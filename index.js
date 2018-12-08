// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  let firstDrive = drivers.slice(0,2);
  return firstDrive;
};

const returnLastTwoDrivers = function(drivers){
  let lastDrive = drivers.slice(-2);
  return lastDrive;
};

const selectingDrivers = function() {
    return returnFirstTwoDrivers();
    return returnLastTwoDrivers();
      
    };