import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Cpu, ShieldAlert, CheckCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-mono font-bold text-primary uppercase tracking-widest block mb-3">
            {project.category} CASE STUDY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} /> Launch Project
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-secondary/20 hover:bg-secondary/40 text-foreground font-bold text-sm transition-colors"
            >
              <FaGithub size={16} /> Source Code
            </a>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-border mb-16 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-foreground/75 leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-mono text-foreground/50 uppercase tracking-wider mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-secondary/30 border border-border text-foreground/80 font-mono text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl border border-red-950/20 bg-red-950/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldAlert size={80} />
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
              <ShieldAlert size={20} />
              The Challenge_
            </h3>
            <p className="text-foreground/85 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-950/20 bg-emerald-950/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle size={80} />
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <CheckCircle size={20} />
              The Solution_
            </h3>
            <p className="text-foreground/85 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Grid */}
        <div className="p-8 rounded-2xl border border-border bg-secondary/10">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Cpu className="text-primary" />
            System Architecture
          </h3>
          <div className="flex flex-col gap-6">
            {project.architecture.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-primary font-bold shrink-0">
                  {index + 1}
                </div>
                <div className="pt-1.5">
                  <p className="text-foreground/85">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
