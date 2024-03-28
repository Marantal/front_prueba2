export function validarEdad(fechaNacimiento) {

  const fechaNacimientoDate = new Date(fechaNacimiento);
  const fechaActual = new Date();

  let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  const mesActual = fechaActual.getMonth();
  const diaActual = fechaActual.getDate();
  const mesNacimiento = fechaNacimientoDate.getMonth();
  const diaNacimiento = fechaNacimientoDate.getDate();

  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    edad--;
  }

  return edad >= 18;
}