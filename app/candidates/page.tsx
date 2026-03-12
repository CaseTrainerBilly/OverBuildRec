import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/cta-section';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, BookOpen, Briefcase, ArrowRight } from 'lucide-react';

export default function CandidatesPage() {
  const resources = [
    {
      icon: Upload,
      title: 'Upload Your CV',
      description:
        'Create a profile and upload your CV to be considered for relevant opportunities that match your skills and experience.',
    },
    {
      icon: Briefcase,
      title: 'Browse Opportunities',
      description:
        'Search through hundreds of roles in construction, engineering, and infrastructure across the UK.',
    },
    {
      icon: BookOpen,
      title: 'Career Advice',
      description:
        'Access our guides and tips on interview preparation, resume writing, and career development in construction.',
    },
  ];

  const careerTips = [
    {
      title: 'Tailor Your CV',
      description:
        'Highlight relevant experience and certifications that match the job requirements. Use industry keywords.',
    },
    {
      title: 'Get Certified',
      description:
        'Invest in CITB, NEBOSH, or other industry certifications to stand out from other candidates.',
    },
    {
      title: 'Build Your Network',
      description:
        'Attend industry events and connect with professionals in your field to discover new opportunities.',
    },
    {
      title: 'Prepare for Interviews',
      description:
        'Research the company, practice common questions, and be ready to discuss your construction experience.',
    },
  ];

  return (
    <div>
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">For Candidates</h1>
          <p className="mt-2 text-muted-foreground">
            Find your next opportunity in construction, engineering, and infrastructure
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">How We Can Help</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 text-xl font-bold">{resource.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {resource.description}
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold md:text-4xl">Get Started</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">Upload Your CV</h3>
                <p className="mt-2 text-muted-foreground">
                  Build your profile and upload your CV to be matched with relevant
                  opportunities. Our consultants will review your profile and contact
                  you with tailored job matches.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/contact">Create Profile</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">Browse Jobs</h3>
                <p className="mt-2 text-muted-foreground">
                  Browse our full list of vacancies in construction, engineering, and
                  infrastructure. Use our filters to find roles matching your location,
                  job type, and industry preferences.
                </p>
                <Button asChild className="mt-6" variant="outline">
                  <Link href="/jobs">Browse Jobs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Career Tips & Advice</h2>
          <p className="mt-2 text-muted-foreground">
            Maximize your chances of landing your dream role
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {careerTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    Tip {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{tip.title}</h3>
                  <p className="mt-2 text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Why Work With OVERBUILD?</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Industry Expertise</h3>
              <p className="mt-2 text-muted-foreground">
                Our consultants understand the construction, engineering, and
                infrastructure sectors inside and out. They know what employers are
                looking for.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Personalized Support</h3>
              <p className="mt-2 text-muted-foreground">
                We Don&apos;t just match you with jobs - we support you through the entire
                application and interview process.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Exclusive Opportunities</h3>
              <p className="mt-2 text-muted-foreground">
                Access roles that may not be advertised elsewhere. Our clients often
                prefer to hire through OVERBUILD.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Career Development</h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;re not just about finding your next job - we help you build a
                lasting career in your chosen field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Next Role?"
        description="Browse our job listings or upload your CV to be matched with opportunities tailored to your skills and experience."
        primaryText="Browse Jobs"
        primaryHref="/jobs"
        secondaryText="Upload CV"
        secondaryHref="/contact"
      />
    </div>
  );
}
