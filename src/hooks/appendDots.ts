export function appendDots(value: string, maxLength: number) {
  return value?.length > maxLength
    ? `${value.substring(0, maxLength)}...`
    : value
}
