import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base font-semibold"
          >
            <Link href={primaryHref}>
              {primaryText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {secondaryText && secondaryHref && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
