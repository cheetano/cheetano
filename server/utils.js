const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

const convertirDescripcionAFecha = (entrada) => {
    const partes = entrada.split(" ");
    const dia = Number(partes[0]);
    const mes = meses.indexOf(partes[1]);
    const año = Number(partes[2]);
    return new Date(año, mes, dia, 0,0,0,0);
}

export {convertirDescripcionAFecha}