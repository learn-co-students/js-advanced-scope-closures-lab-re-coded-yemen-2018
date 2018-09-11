function produceDrivingRange(range){
  return function(blockA, blockB){
    let blocka = parseInt(blockA);
    let blockb = parseInt(blockB);
    const dist = function(blocka,blockb){
      let result = blockb-blocka;
      if(result < 0){result*-1;}
      return result
    }
    let distance = dist(blocka, blockb);
    const differ = function(range,distance){
      let result = range-distance;
      if(result < 0){result *= -1;}
      return result
    }
    let difference = differ(range, distance);
    if(distance <= range){
      return "within range by " + (difference);
    }
    else
    {
      return (difference) + " blocks out of range";

    }

  }
}

function produceTipCalculator(tip){
  return function(price){
    return price*tip;

  }
}
