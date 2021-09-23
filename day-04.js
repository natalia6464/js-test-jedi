//
function padIt(str,n){
  const starsL = []; 
  const starsR = [];
    if( n % 2 === 0){
  let i = 0;
  while(i < n / 2){
    starsL[i] = "*";
    i++;
  };
  let j = 0;
  while ( j < n / 2){
    starsR[j] = "*";
    j++
  };
  }
  else{
  let i = 0;
  while( i < n - (n / 2)){
    starsL[i] = "*";
    i++;
  };
  let j = 0;
  while ( j < n / 2 - 1){
    starsR[j] = "*";
    j++
  };
  };
   let starsAndStr = starsL.join("") + str + starsR.join("");
      return starsAndStr;
}
