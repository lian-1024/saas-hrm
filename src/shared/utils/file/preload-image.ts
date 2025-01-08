export const preloadImage = (url: string): Promise<string> => {
  // If not a URL, return directly
  try {
    new URL(url)
  } catch {
    return Promise.resolve(url)
  }

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