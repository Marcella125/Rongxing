const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fallbackScript = `
(function () {
  var basePath = ${JSON.stringify(basePath)};
  var routes = ["capabilities", "company", "contact", "markets", "news", "products"];
  var path = window.location.pathname;
  var relativePath = basePath && path.indexOf(basePath) === 0
    ? path.slice(basePath.length)
    : path;
  var route = relativePath.replace(/^\\/+|\\/+$/g, "");

  if (routes.indexOf(route) !== -1) {
    window.location.replace(basePath + "/" + route + "/" + window.location.search + window.location.hash);
    return;
  }

  window.location.replace(basePath + "/" + window.location.search + window.location.hash);
})();
`;

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[color:var(--color-navy-950)] px-6 text-center text-white">
      <script dangerouslySetInnerHTML={{ __html: fallbackScript }} />
      <div>
        <p className="section-label mb-4">Redirecting</p>
        <h1 className="text-[2.4rem] font-semibold uppercase leading-none tracking-[-0.04em]">
          Page not found.
        </h1>
        <p className="mt-4 text-[0.95rem] leading-7 text-white/72">
          Taking you back to the site.
        </p>
      </div>
    </main>
  );
}
