import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN, // Add your token here
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source: any) => {
  return builder.image(source);
};
