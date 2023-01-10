
let value=document.getElementById('three');
let ans1=document.getElementById('one');
let m=1;
let x=0;

value.addEventListener('click',reset);

 function reset(){
   ans1.innerHTML=m;
   x=1;
}

let ans=document.getElementById('two');
let max=document.getElementById('one');
 ans.addEventListener('click',increment);
 
 function increment(){
   x+=1;
   max.innerHTML=x;
 }
