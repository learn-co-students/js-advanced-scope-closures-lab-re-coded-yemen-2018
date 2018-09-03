function produceDrivingRange(blockRange){
  return function(firstValue, secondValue){
    let result = parseInt(secondValue) - parseInt(firstValue);
    let diff = result - blockRange;
    if(blockRange > result){
      return `within range by ${Math.abs(diff)}`;
    }else{
      return `${Math.abs(diff)} blocks out of range`;
    }
  };
};

function produceTipCalculator(percent){
  return function(amount){
    return amount * percent;
  };
};

function createDriver(){
  let drivId = 0;
  return class {
    constructor(name){
      this.id = ++drivId;
      this.name = name;
    }
  }
};
