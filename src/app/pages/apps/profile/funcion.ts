

export function createDate(length: number) {
  const fechas: number[] = [];

  for (let i = 0; i < length; i++) {
    fechas.push(i);
  }
  console.log(fechas.reverse())

  return fechas.reverse();
}
