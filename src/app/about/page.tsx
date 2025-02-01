/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPerson } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default async function About() {
  const person: any = await getPerson();

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{person.fields.name}</h1>

          {person.fields.profileImage && (
            <div className="mb-6">
              <Image
                src={'https:' + person.fields.profileImage.fields.file.url}
                alt={person.fields.name}
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          )}

          <h2 className="text-2xl mb-4">{person.fields.title}</h2>

          <div className="prose max-w-none">
            {person.fields.description && documentToReactComponents(person.fields.description)}
          </div>
        </div>
      </main>
    </div>
  );
}
