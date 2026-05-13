export function Footer() {
  return (
    <footer
      data-section-theme="dark"
      className="theme-dark"
      style={{ paddingBlock: "4rem" }}
    >
      <div className="container-prose">
        <div
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--rule)", paddingTop: "2.5rem" }}
        >
          <div>
            <p className="font-serif text-xl">Academia IA</p>
            <p className="mt-2 text-xs" style={{ color: "var(--text-mute)" }}>
              Un proyecto en desarrollo · España · 2026
            </p>
          </div>
          <a
            href="mailto:hola@academia-ia.es"
            className="text-sm transition-colors"
            style={{
              color: "var(--text-soft)",
              borderBottom: "1px solid var(--rule)",
              paddingBottom: 2,
            }}
          >
            hola@academia-ia.es
          </a>
        </div>
      </div>
    </footer>
  );
}
