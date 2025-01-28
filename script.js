let frontView = true;

function toggleImage() {
  const carImage = document.getElementById("carImage");
  if (frontView) {
    carImage.src = "./assets/Images/2001_Elysion_Vision_5-Speed_(Rear).png";
  } else {
    carImage.src = "./assets/Images/2001_Elysion_Vision_5-Speed_(Front).png";
  }
  frontView = !frontView;
}

function changeColor(color) {
  document.getElementById("selectedColor").innerText =
    "Current Color: " + color;
}
