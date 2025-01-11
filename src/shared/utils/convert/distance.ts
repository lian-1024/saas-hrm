export const convertDistance = (value: number): string => {
  switch (true) {
    case value < 1000:
      return `${value}米`
    case value >= 1000 && value < 1000000:
      return `${(value / 1000).toFixed(2)}公里`
    default:
      return `${(value / 1000000).toFixed(2)}百万公里`
  }
}
