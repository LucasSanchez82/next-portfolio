export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {`© ${new Date().getFullYear()} Lucas Sanchez. Tout droit reservé.`}
      </small>
      <p className="text-xs">
        <span className="font-semibold">A propos du site:</span> produit via
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Self hosting.
      </p>
    </footer>
  );
}
