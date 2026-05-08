
function cambiarMarca(marca) {

  // Cambiar título
  document.getElementById("titulo-marca").textContent = marca;

  // MERCEDES
  if (marca === "Mercedes Benz") {
    document.getElementById("img1").src = "/public/img/benz1.jpg";
    document.getElementById("titulo1").textContent = "Clase A";
    document.getElementById("precio1").textContent = "Desde $235.900.000";

    document.getElementById("img2").src = "/public/img/benz2.jpg";
    document.getElementById("titulo2").textContent = "Clase C";
    document.getElementById("precio2").textContent = "Desde $363.900.000";

    document.getElementById("img3").src = "/public/img/benz3.jpg";
    document.getElementById("titulo3").textContent = "Clase G";
    document.getElementById("precio3").textContent = "Desde $1.149.900.000";

    document.getElementById("img4").src = "/public/img/benz4.jpg";
    document.getElementById("titulo4").textContent = "GLB";
    document.getElementById("precio4").textContent = "Desde $249.900.000";
  }

  // KIA
  if (marca === "Kia") {
    document.getElementById("img1").src = "/public/img/kia1.jpg";
    document.getElementById("titulo1").textContent = "Kia Rio";
    document.getElementById("precio1").textContent = "Desde $80.000.000";

    document.getElementById("img2").src = "/public/img/kia2.jpg";
    document.getElementById("titulo2").textContent = "Kia Sportage";
    document.getElementById("precio2").textContent = "Desde $120.000.000";

    document.getElementById("img3").src = "/public/img/kia3.jpg";
    document.getElementById("titulo3").textContent = "Kia Sorento";
    document.getElementById("precio3").textContent = "Desde $150.000.000";

    document.getElementById("img4").src = "/public/img/kia4.jpg";
    document.getElementById("titulo4").textContent = "Kia Picanto";
    document.getElementById("precio4").textContent = "Desde $60.000.000";
  }

  // MAZDA
  if (marca === "Mazda") {
    document.getElementById("img1").src = "/public/img/mazda1.jpg";
    document.getElementById("titulo1").textContent = "Mazda 2";
    document.getElementById("precio1").textContent = "Desde $85.000.000";

    document.getElementById("img2").src = "/public/mg/mazda2.jpg";
    document.getElementById("titulo2").textContent = "Mazda 3";
    document.getElementById("precio2").textContent = "Desde $110.000.000";

    document.getElementById("img3").src = "/public/img/mazda3.jpg";
    document.getElementById("titulo3").textContent = "CX-5";
    document.getElementById("precio3").textContent = "Desde $140.000.000";

    document.getElementById("img4").src = "/public/img/mazda4.jpg";
    document.getElementById("titulo4").textContent = "CX-30";
    document.getElementById("precio4").textContent = "Desde $130.000.000";
  }
}