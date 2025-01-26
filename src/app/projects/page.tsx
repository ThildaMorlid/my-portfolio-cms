import { getProjects } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />
      <main className="px-4 py-8">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[8rem] font-bold leading-none tracking-tighter mb-12">
            PROJEKT
          </h1>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project: any) => (
              <div key={project.sys.id} className="group">
                <div className="md:flex gap-8 items-start">
                  {project.fields.image && (
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <Image
                        src={'https:' + project.fields.image.fields.file.url}
                        alt={project.fields.title}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">{project.fields.title}</h2>
                    <div className="prose max-w-none mb-4">
                      {documentToReactComponents(project.fields.description)}
                    </div>
                    {project.fields.link && (
                      <a
                        href={project.fields.link}
                        className="text-lg hover:text-blue-600 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Se projekt →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
