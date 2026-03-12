import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { Testimonial } from '@/components/testimonial';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const industries = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'From site managers to skilled trades',
    },
    {
      icon: TrendingUp,
      title: 'Engineering',
      description: 'Civil, structural, and technical engineers',
    },
    {
      icon: Briefcase,
      title: 'Infrastructure',
      description: 'Project managers and specialists',
    },
  ];

  const stats = [
    { number: '5,000+', label: 'Placements' },
    { number: '200+', label: 'Partner Companies' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      quote:
        'OVERBUILD found us exactly the right Site Manager for our London project. Their understanding of the construction sector is unmatched.',
      author: 'James Mitchell',
      role: 'Projects Director',
      company: 'BuildTech Solutions',
    },
    {
      quote:
        'As someone new to the industry, OVERBUILD provided fantastic support and matched me with a role that perfectly fit my skills and ambitions.',
      author: 'Sarah Chen',
      role: 'Civil Engineer',
      company: 'Infrastructure Group',
    },
    {
      quote:
        'The team understands our hiring challenges and consistently delivers qualified candidates. They are a true partner to our business.',
      author: 'Robert Thompson',
      role: 'HR Manager',
      company: 'Metro Construction',
    },
  ];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-background to-secondary py-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
              Building the Workforce Behind Tomorrows{' '}
              <span className="text-primary">Infrastructure</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">
              OVERBUILD is your specialist recruitment partner for construction,
              engineering, and infrastructure talent. We connect exceptional
              candidates with industry-leading companies.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base font-semibold">
                <Link href="/jobs">
                  Find Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base font-semibold"
              >
                <Link href="/employers">Hire Talent</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Featured Opportunities</h2>
          <p className="mt-2 text-muted-foreground">
            Explore our latest job openings across the sector
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">Senior Site Manager</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  BuildTech Solutions • London
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                  £60k - £80k
                </p>
                <Button asChild className="mt-4 w-full" variant="outline">
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">Civil Engineer</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Engineering Partners • Manchester
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                  £45k - £60k
                </p>
                <Button asChild className="mt-4 w-full" variant="outline">
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">Project Coordinator</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Metro Construction • Birmingham
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                  £35k - £45k
                </p>
                <Button asChild className="mt-4 w-full" variant="outline">
                  <Link href="/jobs">View All Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Industries We Serve</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 text-xl font-bold">{industry.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Next Opportunity?"
        description="Browse thousands of jobs in construction, engineering, and infrastructure. Start your career journey with OVERBUILD today."
        primaryText="Browse Jobs"
        primaryHref="/jobs"
        secondaryText="Learn More"
        secondaryHref="/about"
      />
    </>
  );
}
