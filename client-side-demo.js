function changeImage() {
    let picture = document.getElementById("picture");
    picture.setAttribute("src", "images/jigglypuff.jpg");
}

function changeText(){
    let text=document.getElementById("text");
    text.innerHTML = "new text";
}

function addImages() {
  let panda = document.createElement("img");
  panda.setAttribute("src", "images/smallpanda.png");
  document.body.append(panda);
}

addImages();

  