export function validarPass(pass) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_.!|*ñ$&-+]).{8,}$/;
  return regex.test(pass);
}