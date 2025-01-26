import { getAboutPage } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default async function About() {
  const person = await getAboutPage();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{person.fields.name}</h1>

          {person.fields.profileImage && (
            <div className="mb-6">
              <Image
                src={'https:' + person.fields.profileImage.fields.file.url}
                alt={person.fields.name}
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}

          <div className="prose max-w-none">
            {documentToReactComponents(person.fields.description)}
          </div>
        </div>
      </main>
    </div>
  );
}
