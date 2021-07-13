import fs from 'fs'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'blogs')

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((fiePath) => /\.mdx?$/.test(fiePath))
