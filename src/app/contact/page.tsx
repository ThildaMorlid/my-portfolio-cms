/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from '@/components/Navigation';
import { getContactInfo } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function Contact() {
  const contact: any = await getContactInfo();

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />
      <main className="px-4 py-8">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[8rem] font-bold leading-none tracking-tighter mb-12">
            {contact.fields.title?.toString()}
          </h1>

          <div className="max-w-2xl text-lg space-y-8">
            {contact.fields.description && documentToReactComponents(contact.fields.description)}

            <div className="space-y-4">
              {contact.fields.email && (
                <p>
                  <span className="text-gray-600">Email: </span>
                  <a
                    href={`mailto:${contact.fields.email}`}
                    className="hover:text-blue-600"
                  >
                    {contact.fields.email}
                  </a>
                </p>
              )}

              {contact.fields.linkedin && (
                <p>
                  <span className="text-gray-600">LinkedIn: </span>
                  <a
                    href={contact.fields.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    LinkedIn Profil
                  </a>
                </p>
              )}

              {contact.fields.github && (
                <p>
                  <span className="text-gray-600">GitHub: </span>
                  <a
                    href={contact.fields.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    GitHub Profil
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
