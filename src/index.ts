export const print = (t: string): void => {
  if (!t) return console.warn(`Master Librarian says: Shoud provide a text!`)
  return console.log(`Said at Long Library: "${t}"`)
}
