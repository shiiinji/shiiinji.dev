export type Modify<T, R> = Omit<T, keyof R> & R

export type BlogMetaData = {
  title: string
  date: string
  id: string
}
