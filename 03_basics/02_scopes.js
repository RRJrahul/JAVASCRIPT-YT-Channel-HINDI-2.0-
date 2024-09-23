//var c= 300
let a = 300
if(true){
let a = 10    //they all have limitation within this block
const b = 20
//console.log("INNER:",a);

}
for(let i=0;i < Array.length;i++){
    const element = Array[i];
    
}


//console.log(a);
//console.log(b);
// console.log(c);

//PART 2
function one(){
    const username = "Rahul"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username = "rrj"
    if(username === "rrj"){
        const website = "Xbeats"
        console.log(username + website);
        }
    //console.log(website);
    }
    //console.log(username);

    //++++++++++++++++++++ Intresting ++++++++++++

    console.log(addone(5));
    function addone(num){
        return num + 1
    }
   

    //console.log(addTwo(5));
    const addTwo = function(num){//here we declared a function abd we hold it in  a variable
        return num + 2
    }
    
    



