import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { Card, CardContent } from '@/components/ui/card';
import { CircleCheck as CheckCircle, Users, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';

export default function EmployersPage() {
  const services = [
    {
      icon: Users,
      title: 'Talent Sourcing',
      description:
        'We actively search and identify top talent in construction and engineering sectors, ensuring you have access to the best candidates.',
    },
    {
      icon: Briefcase,
      title: 'Professional Screening',
      description:
        'Our expert team rigorously screens candidates, assessing technical skills, experience, and cultural fit.',
    },
    {
      icon: TrendingUp,
      title: 'Industry Specialists',
      description:
        'Our consultants have deep knowledge of construction, engineering, and infrastructure roles, trends, and requirements.',
    },
  ];

  const benefits = [
    'Access to pre-screened, qualified candidates',
    'Faster hiring process and reduced time-to-fill',
    'Deep industry expertise and knowledge',
    'Flexible recruitment solutions',
    'Dedicated account management',
    'Competitive pricing and transparent fees',
  ];

  return (
    <div>
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">For Employers</h1>
          <p className="mt-2 text-muted-foreground">
            Build your team with OVERBUILD's specialist recruitment services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Our Services</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Why Choose OVERBUILD?</h2>
              <p className="mt-4 text-muted-foreground">
                We understand the unique challenges of recruiting in the
                construction and engineering sectors. Our team has spent years
                building relationships and expertise.
              </p>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-12">
              <div className="space-y-4">
                <div className="rounded-lg bg-background p-4">
                  <p className="font-semibold">5,000+</p>
                  <p className="text-sm text-muted-foreground">Successful placements</p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <p className="font-semibold">200+</p>
                  <p className="text-sm text-muted-foreground">Partner companies</p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <p className="font-semibold">98%</p>
                  <p className="text-sm text-muted-foreground">Client satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="mt-10 space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </div>
                <div className="mt-4 h-16 w-1 bg-border md:h-1 md:w-16"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold">Submit Your Vacancy</h3>
                <p className="mt-2 text-muted-foreground">
                  Tell us about your open position, requirements, and expectations.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </div>
                <div className="mt-4 h-16 w-1 bg-border md:h-1 md:w-16"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold">Candidate Search & Screening</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team conducts an extensive search and thoroughly screens candidates.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </div>
                <div className="mt-4 h-16 w-1 bg-border md:h-1 md:w-16"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold">Interview & Selection</h3>
                <p className="mt-2 text-muted-foreground">
                  We present you with pre-qualified candidates ready for interviews.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold">Placement & Support</h3>
                <p className="mt-2 text-muted-foreground">
                  We manage the entire process and provide support through your onboarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Fill Your Vacancies?"
        description="Submit your job openings today and let our specialist team find the perfect candidates for your organization."
        primaryText="Submit a Vacancy"
        primaryHref="/contact"
        secondaryText="Learn More"
        secondaryHref="/about"
      />
    </div>
  );
}
