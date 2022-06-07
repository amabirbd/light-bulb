const lightImg = document.getElementById("lightImg");

const toggleSwitch = () => {
  console.log("clicked");
  const light = document.getElementById("lightOn");
  const lightOn = document.getElementById("lightOn");
  if (lightOn.style.display === "none") {
    lightOn.style.display = "block";
  } else {
    light.style.display = "none";
  }
};

lightImg.addEventListener("click", toggleSwitch);

console.log(light);
