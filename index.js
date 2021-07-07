function produceDrivingRange(range){
  return function(block1, block2){
   let block=parseInt(block1)-parseInt(block2);
    const absolute =  Math.abs(block);


    let DIS =Math.abs(block);
    const sub =  Math.abs(range-DIS);


    let difference = sub;
    if( DIS  <= range){
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
