export const preloadImage = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img.src)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}