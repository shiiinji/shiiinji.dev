export type Modify<T, R> = Omit<T, keyof R> & R
export type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never

export type BlogMetaData = {
  title: string
  date: string
  id: string
}
