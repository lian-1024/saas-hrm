export const getBase64 = (file: File): Promise<string> => {

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => resolve(reader.result as string))
    reader.addEventListener("error", () => reject(new Error('Failed to read file')))
    reader.readAsDataURL(file)
  })

}