// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { services } from "@/lib/content";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service not found — Arabhardware Business" };
  }

  return {
    title: `${service.title} — Arabhardware Business`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);

  if (index === -1) {
    notFound();
  }

  const service = services[index];
  const next = services[(index + 1) % services.length];

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetail service={service} index={index} next={next} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}