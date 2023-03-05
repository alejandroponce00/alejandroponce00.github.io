
document.getElementById('boton').onclick  = function () {
    console.log("capturamos el evento on click");
    document.getElementById("demo2").innerHTML = "02223-758994 Roberto Morales(Encargado del sector)"
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "NO TE DEFRAUDARÉ";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "";
  }


