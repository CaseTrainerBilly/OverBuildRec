import Link from 'next/link';
import { Building2, Linkedin, Twitter, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">OVERBUILD</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Specialist recruitment partner for construction, engineering, and
              infrastructure talent.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">For Candidates</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/jobs"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/candidates"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Upload CV
                </Link>
              </li>
              <li>
                <Link
                  href="/candidates"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">For Employers</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/employers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/employers"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Submit Vacancy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@overbuild.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+44 20 1234 5678</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} OVERBUILD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
