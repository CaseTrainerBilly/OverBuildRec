import Link from 'next/link';
import { MapPin, Building2, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  jobType: string;
  salaryMin?: number;
  salaryMax?: number;
  industry: string;
  isFeatured?: boolean;
}

export function JobCard({
  id,
  title,
  company,
  location,
  jobType,
  salaryMin,
  salaryMax,
  industry,
  isFeatured,
}: JobCardProps) {
  const formatSalary = () => {
    if (!salaryMin || !salaryMax) return 'Competitive';
    return `£${(salaryMin / 1000).toFixed(0)}k - £${(salaryMax / 1000).toFixed(0)}k`;
  };

  return (
    <Card className={`transition-shadow hover:shadow-lg ${isFeatured ? 'border-primary' : ''}`}>
      <CardContent className="pt-6">
        {isFeatured && (
          <Badge className="mb-3">Featured</Badge>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Building2 className="mr-2 h-4 w-4" />
            {company}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            {jobType}
          </div>
          <div className="flex items-center text-sm font-semibold text-primary">
            <DollarSign className="mr-2 h-4 w-4" />
            {formatSalary()}
          </div>
        </div>
        <div className="mt-3">
          <Badge variant="outline">{industry}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/jobs/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
