import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProjects() {
  const response = await client.getEntries({
    content_type: 'project'
  });
  return response.items;
}

export async function getPerson() {
  const response = await client.getEntries({
    content_type: 'person',
    limit: 1
  });
  return response.items[0];
}
