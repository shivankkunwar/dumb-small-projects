afterClick =()=>{
var birthYear = prompt("what year were you born in?")
var ageInDaz = (2021 - birthYear)*365;
document.getElementById("flex-box-result").innerText=`you are ${ageInDaz} days old!`;
}
reset =()=>{
    document.getElementById("flex-box-result").innerText=null;
}
// function afterClick() {
//     var birthYear = prompt("what year were you born in?");
//     var ageInDaz =  (2021 - birthYear)*365;
//     var h1 = document.createElement('h1');
//     var textAnswer = document.createTextNode('you are '+ ageInDaz +' days old!')
//     h1.setAttribute('id','ageInDazs');
//     h1.appendChild(textAnswer);
//     document.getElementById('flex-box-result').appendChild(h1);
// }
// function reset (){
//     document.getElementById('ageIndazs').remove();
// }