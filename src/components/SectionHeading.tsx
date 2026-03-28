import AnimatedSection from "./AnimatedSection";

interface Props {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ label, title, description, align = "center", light = false }: Props) {
  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-4">
          {label}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-primary-foreground" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
