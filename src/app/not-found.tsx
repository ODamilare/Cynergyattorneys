import { ButtonLink, container } from "@/components/ui";
export default function NotFound() {
  return (
    <div className={`${container} py-32`}>
      <h1 className="font-serif text-6xl text-navy">Page not found</h1>
      <p className="mt-4 text-slate">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8"><ButtonLink href="/">Return home</ButtonLink></div>
    </div>
  );
}
