import {Tree, formatFiles, generateFiles, joinPathFragments, names} from '@nrwl/devkit';

// TODO: Fix the creationDate to generate string

interface NewArticleSchemaOptions {
  title: string
  author: string
  excerpt?: string
}

export default async function (tree: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    './_articles',
    {
      title: schema.title,
      excerpt: schema.excerpt || '',
      author: schema.author,
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toISOString(),
    }
  )
  // await formatFiles(tree);
}
