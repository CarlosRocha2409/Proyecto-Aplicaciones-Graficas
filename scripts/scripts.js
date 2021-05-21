const Ejercicio = () => {
  const enlaces = document.getElementsByTagName("a");
  const parrafos = document.getElementsByTagName("p");
  console.log(parrafos[0].tagName);
  const numero = enlaces.length;
  let expanded = false;
  console.log(`Numero de enlaces ${numero}`);
  console.log(
    `Direciòn del ultimo enlace ${
      enlaces[numero - 1].href.length > 0
        ? enlaces[numero - 1].href.length
        : "esta vacio"
    }`
  );
  console.log(
    `numero de enlaces que enlazan a contactenos ${
      [].filter.call(enlaces, (el) => el.href == "/contactenos").length
    }`
  );
  console.log(
    ` Numero de enlaces del tercer parrafo ${
      parrafos.length > 2
        ? [].filter.call(parrafos[2], (el) => el.tagName == "A").length
        : "No hay tercer parrafo"
    }`
  );
  const mas = document.getElementById("aprendermas");
  const masText = document.getElementById("mash3");
  const initialContent = masText.innerHTML;
  console.log(mas);
  console.log(masText);
  mas.onclick = () => {
    expanded = !expanded;
    if (expanded) {
      masText.innerHTML +=
        " oushdgfunhdbflghjfdgkdfhkbd bfghfdj hgvdjgdf kgfdgejfgd";
    } else {
      masText.innerHTML = initialContent;
    }
  };
};

function mueveReloj() {
  momentoActual = new Date();
  hora = momentoActual.getHours();
  minuto = momentoActual.getMinutes();
  segundo = momentoActual.getSeconds();

  horaImprimible = hora + " : " + minuto + " : " + segundo;

  console.log(horaImprimible);

  document.getElementById("reloj").innerHTML = horaImprimible;

  setTimeout("mueveReloj()", 1000);
}

window.onload = () => {
  mueveReloj();
};
