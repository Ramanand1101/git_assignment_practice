function prime(num){
let count=0;
for(i=0;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){
  console.log("Yes")
  }else{
  console.log("No")
  }
}
prime(13);
prime(26);
prime(33);