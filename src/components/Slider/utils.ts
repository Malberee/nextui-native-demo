export const clamp = (
  value: number,
  lowerBound: number,
  upperBound: number,
) => {
  return Math.min(Math.max(lowerBound, value), upperBound)
}
