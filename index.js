function produceDrivingRange(blockRange){
  
  return function range(d1,d2){
    let ds=parseInt(d2)-parseInt(d1);
    let d=Math.abs(ds-blockRange);
    if(ds > blockRange){
      
      return `${d} blocks out of range`;
    }
    else{
      
      return `within range by ${d}`;
    }
    
    
  }
}
function produceTipCalculator(tip){
  return function(fare){
    return tip*fare;
  }
  
}