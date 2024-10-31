for(let i = 0; i <=10; i++) {

console.log(i)
if(i%2 ==0){
    document.getElementById('par').innerHTML += i + " "
}
else {

    document.getElementById('impar').innerHTML += i + " "

}
}