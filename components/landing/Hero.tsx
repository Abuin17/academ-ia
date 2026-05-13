export function Hero() {
  return (
    <section className="px-6 pt-32 pb-28 sm:pt-40 sm:pb-32 md:pt-48 md:pb-40">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center fade-in">
          <h1 className="font-serif text-[2.4rem] leading-[1.05] tracking-tight text-[color:var(--color-ink)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            El mundo que hereda tu hijo ya funciona con IA.
          </h1>
          <p className="mt-4 font-serif text-[1.85rem] italic leading-[1.15] text-[color:var(--color-ink-soft)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            ¿Quién le está enseñando a pensar con ella?
          </p>
          <p className="mt-10 text-base text-[color:var(--color-ink-soft)] sm:text-lg">
            Academia IA — formación presencial en España. Para niños, jóvenes y profesionales.
          </p>
          <div className="mt-12 flex flex-col items-center gap-3">
            <a href="#lista" className="btn-primary">
              Apúntame a la lista de espera
            </a>
            <p className="text-xs text-[color:var(--color-muted)]">
              Abrimos en Granada primero. Después, en más ciudades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
