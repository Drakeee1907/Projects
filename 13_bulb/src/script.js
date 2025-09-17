const on = document.getElementById("on");
const off = document.getElementById("off");
const bulb = document.getElementById("bulb");

on.addEventListener("click", () => {
    bulb.src = "./bulb_on.png";
});

off.addEventListener("click", () => {
    bulb.src = "./bulb_off.png";
});    
 