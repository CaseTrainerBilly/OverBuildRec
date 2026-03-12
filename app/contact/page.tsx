'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { createClient } from '@supabase/supabase-js';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
      );

      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            Get in touch with the OVERBUILD team
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-950 dark:text-green-200">
                  Thank you for your message. We'll get back to you soon!
                </div>
              )}
              {error && (
                <div className="rounded-lg bg-red-50 p-4 text-red-700 dark:bg-red-950 dark:text-red-200">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <Button size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Information</h3>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@overbuild.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@overbuild.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+442012345678"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +44 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Office</p>
                      <p className="text-muted-foreground">
                        123 Construction Street
                        <br />
                        London, UK
                        <br />
                        EC1A 1BB
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/jobs" className="text-primary hover:underline">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/employers" className="text-primary hover:underline">
                    For Employers
                  </a>
                </li>
                <li>
                  <a href="/candidates" className="text-primary hover:underline">
                    For Candidates
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-primary hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
