export function formatearFecha(fechaISO) {
  const fecha = new Date(fechaISO);

  const dia = fecha.getDate().toString().padStart(2, '0');
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // ¡Recuerda sumar 1 al mes!
  const año = fecha.getFullYear().toString().slice(-2); // Tomamos los últimos dos dígitos del año
  const hora = fecha.getHours().toString().padStart(2, '0');
  const minutos = fecha.getMinutes().toString().padStart(2, '0');

  return `${dia}/${mes}/${año} ${hora}:${minutos}`;
}

export function fechaActual() {
  const ahora = new Date();
  const anio = ahora.getFullYear();
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Añade cero a la izquierda si es necesario
  const dia = String(ahora.getDate()).padStart(2, '0');
  const hora = String(ahora.getHours()).padStart(2, '0');
  const minuto = String(ahora.getMinutes()).padStart(2, '0');
  const segundo = String(ahora.getSeconds()).padStart(2, '0');

  const tiempo = `${anio}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;

  return tiempo;
}