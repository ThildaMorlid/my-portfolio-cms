/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProjects } from '@/lib/contentful';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default async function Home() {
  const projects: any = await getProjects();

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navigation className="p-4" />
      <main className="px-4 py-8">
        <div className="max-w-[1400px] mx-auto mb-12">
          <h1 className="text-[8rem] font-bold leading-none tracking-tighter">
            THILDA<br />MÖRLID
          </h1>
        </div>

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
