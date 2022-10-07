import * as matter from "gray-matter"
import * as path from "path"
import * as fs from "fs"
import {serialize} from "next-mdx-remote/serialize"

export function getParsedFileContentBySlug(fileName: string, postsPath: string) {
  const postFilePath = path.join(postsPath, `${fileName}.mdx`)
  const fileContent = fs.readFileSync(postFilePath)
  const {data, content} = matter(fileContent)
  return {
    frontMatter: data,
    content
  }
}

export function renderMarkdown(markdownContent: string) {
  return serialize(markdownContent || "")
}
