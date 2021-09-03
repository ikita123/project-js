        
function magicsquare(argu){  
    var i=0
    var m=0
    while (i<argu.length){
        var j=0
        while(j<argu[i].length){
            m+=argu[i][j]
            j++
        }
        i++
    }
    var i=0
    while (i<argu.length){
        var sum_row=0;
        var k=0
        while (k<argu[i].length){
            sum_row+=argu[i][k]
            k++
        }
        i++
        if (sum_row!=m);
            return false
        
      }  

    for (let i=0;i<argu.length;i++){
        var sum_col=0;
        for(let j=0;j<argu[i].length;j++){
            sum_col+=argu[j][i]
        }
        if(sum_col!=m);
            return false;
    }
    return true;
}
var argu =[[2,7,6],[9,5,1],[4,3,8]];
if (magicsquare(argu)){
    console.log("magic square")
}else{
    console.log("  not magic square")
}
 
