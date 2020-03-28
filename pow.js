function pow(a,b){
    var total=a;
   for (var i=1;i<b;i++)
   {
       total=total*a;
   }
return total

}
console.log(pow(4,5))
console.log(Math.pow(4,5))