var name1 =document.getElementById("user")
var button1 = document.getElementById("btn-click")
var button2 = document.getElementById("build-button")
var divchild =document.getElementById("child")
var divparent =document.getElementById("parent")
var divgrandparent =document.getElementById("grandparent")
var liu =document.getElementById("category")
var blaze = document.getElementById("blazers")

function namePrint(){
  name1.innerHTML="<span>Prema</span>"
}

function changeColor(){
  button1.style.backgroundColor = "skyblue"
}
function makeSentence() {
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;  
  const sentence = `${noun} ${verb} ${adverb}`;  document.getElementById('statement').textContent = sentence;
}

button2.addEventListener('click', makeSentence);
name1.addEventListener("onload",namePrint())
button1.addEventListener("click", changeColor)
divchild.addEventListener("click",con = ()=>{console.log("Child cliked")})
divparent.addEventListener("click",con=()=>{console.log("parent clicked")})
divgrandparent.addEventListener("click",con=()=>{console.log("grandparent clicked")})


divchild.addEventListener("click",con = ()=>{console.log("Child cliked")},{capture:true})
divparent.addEventListener("click",con=()=>{console.log("parent clicked")},{capture:true})
divgrandparent.addEventListener("click",con=()=>{console.log("grandparent clicked")},{capture:true})

blaze.addEventListener("click",con=()=>{console.log("blazers")})

