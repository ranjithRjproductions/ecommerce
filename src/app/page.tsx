export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-brandBlue">
        Accessible Disability Aids Marketplace
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        Project scaffold is ready. Next focus: accessible app shell, header, footer, and homepage sections.
      </p>
      <section aria-label="Setup status" className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Setup Status</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Next.js TypeScript scaffold files created.</li>
          <li>Tailwind and ESLint configuration added.</li>
          <li>Accessibility baseline focus styles included.</li>
        </ul>
      </section>
    </main>
  );
}
