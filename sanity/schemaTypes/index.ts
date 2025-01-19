import { ProjectDatasetData, type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { Product } from '@/components/ProductCard'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, product],
}



// import { type SchemaTypeDefinition } from 'sanity'
// import {product} from './product';

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [product],
// }
