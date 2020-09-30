
console.log("ali baghjari")
function jam(){
 var first;
 first = document.getElementById("fir").value;
 first=Number(first);
var second;
 second = document.getElementById("sec").value;
 second=Number(second);
var jj = first+second;
document.getElementById("par").innerHTML=jj;
console.log(first*first*first);

};

function men(){
    var first;
 first = document.getElementById("fir").value;
var second;
 second = document.getElementById("sec").value;
var mm = first-second;
document.getElementById("par").innerHTML=mm;

   console.log(first*first*first);
};
function zarb(){
    var first;
 first = document.getElementById("fir").value;
var second;
 second = document.getElementById("sec").value;
var zz = first*second;
document.getElementById("par").innerHTML=zz;
console.log(first*first*first);


};
function taq(){
    var first;
 first = document.getElementById("fir").value;
var second;
 second = document.getElementById("sec").value;
var tt = first/second;
document.getElementById("par").innerHTML=tt;
console.log(first*first*first);

};

function inpthree(){
   var x = document.getElementById("typeinp").value;
   if(x=="/"){
taq();
   }else if(x=="*"){
zarb();
   }else if(x=="+"){
       jam();
   }else if(x=="-"){
men();
   }else{
       alert("use + - * /")
   }
   

}