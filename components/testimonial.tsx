import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <Quote className="mb-4 h-8 w-8 text-primary" />
        <p className="mb-4 text-muted-foreground italic">{quote}</p>
        <div className="border-t pt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
