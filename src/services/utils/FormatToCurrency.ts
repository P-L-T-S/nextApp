export default function FormatToCurrency(value: number) {
  return "R$" + value.toFixed(2).replace(".", ",");
}
