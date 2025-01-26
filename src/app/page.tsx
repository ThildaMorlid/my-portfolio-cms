import { getProjects } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />

      <main className="px-4 py-8">
        {/* Hero section med stort namn */}
        <div className="max-w-[1400px] mx-auto mb-20">
          <h1 className="text-[15rem] font-bold leading-none tracking-tighter">
            T MÖRLID
          </h1>

          <div className="max-w-3xl mt-6 text-lg">
            {/* Kort beskrivning här */}
            <p>Frontend utvecklare med fokus på användarvänliga och estetiskt tilltalande webbapplikationer.</p>
          </div>
        </div>

        {/* Projekt grid */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <div key={project.sys.id} className="group cursor-pointer">
              {project.fields.image && (
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={'https:' + project.fields.image.fields.file.url}
                    alt={project.fields.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h2 className="text-xl font-normal">{project.fields.title}</h2>
              <p className="text-gray-600">{project.fields.slug}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
