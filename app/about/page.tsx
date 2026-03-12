import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Richardson',
      role: 'Founder & Managing Director',
      bio: '20+ years in construction recruitment with deep ties to the industry.',
    },
    {
      name: 'James Abbott',
      role: 'Head of Engineering Recruitment',
      bio: 'Chartered Engineer with 15 years experience in technical hiring.',
    },
    {
      name: 'Emma Patel',
      role: 'Senior Consultant',
      bio: 'Specializes in infrastructure projects and skilled trades recruitment.',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Consultant',
      bio: 'Focuses on management and leadership roles in construction.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We are committed to delivering exceptional results for both candidates and employers.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'We build lasting relationships based on trust, honesty, and transparency.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description:
        'We view ourselves as partners in your success, not just a service provider.',
    },
  ];

  return (
    <div>
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About OVERBUILD</h1>
          <p className="mt-2 text-muted-foreground">
            Specialist recruitment partner for construction and engineering talent
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              OVERBUILD exists to bridge the gap between talented professionals in
              construction, engineering, and infrastructure and the companies that need
              them. We believe that the right match between candidate and employer can
              transform careers and drive business growth.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              With over 15 years of experience in the industry, we&apos;ve developed deep
              expertise and relationships that enable us to consistently deliver
              exceptional results. Our team understands the unique challenges of
              recruiting in these sectors and approaches every placement with
              professionalism and dedication.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Our Values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {value.description}
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
          <h2 className="text-3xl font-bold md:text-4xl">Our Team</h2>
          <p className="mt-2 text-muted-foreground">
            Meet the dedicated professionals behind OVERBUILD
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10"></div>
                  <h3 className="mt-4 font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">By The Numbers</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="mt-2 text-muted-foreground">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">5,000+</p>
              <p className="mt-2 text-muted-foreground">Successful Placements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="mt-2 text-muted-foreground">Partner Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="mt-2 text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose OVERBUILD?</h2>
          <div className="mt-10 space-y-4">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold">Deep Industry Knowledge</h3>
                <p className="text-muted-foreground">
                  Our team has spent years building expertise in construction,
                  engineering, and infrastructure recruitment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold">Strong Industry Relationships</h3>
                <p className="text-muted-foreground">
                  Our network of companies, contractors, and professionals gives us
                  access to opportunities beyond what&apos;s advertised.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We treat every candidate and employer as unique, tailoring our
                  approach to their specific needs and goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="font-bold">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  With thousands of successful placements and a 98% client
                  satisfaction rate, we&apos;ve earned our reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
