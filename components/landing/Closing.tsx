import { WaitlistForm } from "./WaitlistForm";

export function Closing() {
  return (
    <section id="lista" className="border-t border-[color:var(--color-line)] py-24 sm:py-32">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-[1.1] text-[color:var(--color-ink)] sm:text-4xl md:text-5xl">
            Abrimos en Granada en 2026.
          </h2>
          <p className="mt-3 font-serif text-3xl italic leading-[1.1] text-[color:var(--color-ink-soft)] sm:text-4xl md:text-5xl">
            Después, en tu ciudad.
          </p>
          <p className="mt-8 text-base text-[color:var(--color-ink-soft)] sm:text-lg">
            Déjanos tu email. Te avisamos cuando abramos cerca de ti.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <WaitlistForm submitText="Quiero plaza" source="lista" />
        </div>
      </div>
    </section>
  );
}
