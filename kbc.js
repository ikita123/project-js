function question(){
    QUE=["how many continents are there","what is the capital of india","ng mai konse course padaye jata hai"]
    return QUE
}
var que=question()
function options(){
    OPT=[["1.4","2.9","3.7","4.8"],["1.chandigarh","2.Bhopal","3.chennai","4.Delhi"],["1.softwear","2.counseling","3.tourism","4.agricultur"]]
    return OPT
}
var opt=options()
function answers(){
    ANS=["3.7","4.8","3.chennai","4.Delhi","1.softwear","2.counseling"]
    return ANS
}
var ans=answers()
var c=0;
for(let i=0;i<que.length;i++){
    console.log(que[i])
    for (let j=0;j<opt.length+1;j++){
        console.log(opt[i][j])
        
        var m=0;
        var n=1;
        var currect_ans=[3,4,1]
    }
        console.log("you have 50-50 life line")
        let readlineSync=require("readline-sync");
        let life=readlineSync.question("do youn want life line or not");
        if (life=="yes"){
            if(c==0){
                console.log(ans[i+m])
                console.log(ans[i+n])
                let a=readlineSync.question("enter your answer")
                if(a==currect_ans[i]){
                    console.log("right")
                }
                else{
                    console.log("wrong")
                    break
                }
                c++}
            else{
                console.log("you have already take life line")
                b=readlineSync.question("choose the answer")
                if(b==currect_ans[i]){
                    console.log("right")
                }
                else{
                    console.log("wrong")
                }
            }}
        else if(life=="no"){
            d=readlineSync.question("choose your answer")
            if(d==currect_ans[i]){
                console.log("correct")
            }
            else{
                console.log("wrong")
            }}
        }
        m++
        n++