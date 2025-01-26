import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID saknas i miljövariabler');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('CONTENTFUL_ACCESS_TOKEN saknas i miljövariabler');
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getHomePage() {
  const response = await client.getEntries({
    content_type: 'person',
    limit: 1,
  });

  if (!response.items.length) {
    throw new Error('No person entry found');
  }

  return response.items[0];
}

export async function getProjects() {
  const response = await client.getEntries({
    content_type: 'project',
    order: '-sys.createdAt',
  });

  return response.items;
}

export async function getProject(slug: string) {
  const response = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug,
  });

  return response.items[0];
}

export async function getAboutPage() {
  const response = await client.getEntries({
    content_type: 'person',
  });

  return response.items[0];
}

export async function getContactInfo() {
  const response = await client.getEntries({
    content_type: 'contact',
    limit: 1
  });

  return response.items[0];
}
