function fibonacci(b){
    var total=1;
    var y=0;
    for (var i=1;i<b;i++)
    {
        
    total = total+y
    return total;
    y=total;
    }
    
}
console.log(fibonacci(10))
