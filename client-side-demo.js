function changeImage() {
    let picture = document.getElementById("picture");
    picture.setAttribute("src", "images/jigglypuff.jpg");
}

function changeText(){
  //we did not give text as id anywhere why is this working
    let text=document.getElementById("text");
    text.innerHTML = "new text";  
    let div3=document.getElementById("div3");
    div3.innerHTML="setNewText";   
    let div1=document.getElementById("div1");
    div1.innerHTML="setNewColor";    
    let div2=document.getElementById("div2");
    div2.innerHTML="setNewImage";

}
function extraChallenge(){
  let div3=document.getElementById("div3");
    div3.style.color="red";

    var btn=document.getElementById("changeColor");
  btn.value="changeColour";
}

function addImages() {
  let panda = document.createElement("img");
  panda.setAttribute("src", "images/smallpanda.png");
  document.body.append(panda);
}
function changeColor(){
  var div1=document.getElementById("div1");
  div1.className="fuchsiaback";
  var div2=document.getElementById("div2");
  div2.className="tealback";
  var div3=document.getElementById("div3");
  div2.className="orangeback";
}

//addImages();

  