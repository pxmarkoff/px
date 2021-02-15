export default function toggleModifier(
  condition: boolean,
  classname: string,
  modifier: string
) {
  return condition ? `${classname} ${classname}--${modifier}` : classname;
}
