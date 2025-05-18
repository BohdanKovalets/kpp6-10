export function StringToDate(value: string): Date {
  let arrD: string[] = value.split(/[.\-/]/);
  let arrDate: number[] = arrD.map(Number);


  arrDate[1] -= 1;

  return new Date(arrDate[2], arrDate[1], arrDate[0]);
}
