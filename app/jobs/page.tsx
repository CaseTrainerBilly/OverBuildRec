'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { JobCard } from '@/components/job-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company_id: string;
  companies: {
    name: string;
  };
  location: string;
  job_type: string;
  salary_min: number;
  salary_max: number;
  industry: string;
  is_featured: boolean;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filterJobType, setFilterJobType] = useState('all');
  const [filterIndustry, setFilterIndustry] = useState('all');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL || '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
        );

        const { data, error } = await supabase
          .from('jobs')
          .select('*, companies(name)')
          .order('is_featured', { ascending: false })
          .order('created_at', { ascending: false });

        if (error) throw error;
        setJobs(data || []);
        setFilteredJobs(data || []);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (searchKeyword) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          job.companies.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (filterJobType !== 'all') {
      filtered = filtered.filter((job) => job.job_type === filterJobType);
    }

    if (filterIndustry !== 'all') {
      filtered = filtered.filter((job) => job.industry === filterIndustry);
    }

    setFilteredJobs(filtered);
  }, [jobs, searchKeyword, searchLocation, filterJobType, filterIndustry]);

  return (
    <div>
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Job Opportunities</h1>
          <p className="mt-2 text-muted-foreground">
            Find your next role in construction, engineering, and infrastructure
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Job Title or Company
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs or companies"
                  className="pl-10"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Location</label>
              <Input
                placeholder="City or region"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Job Type</label>
              <Select value={filterJobType} onValueChange={setFilterJobType}>
                <SelectTrigger>
                  <SelectValue placeholder="All job types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All job types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Industry</label>
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="All industries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All industries</SelectItem>
                  <SelectItem value="Construction">Construction</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {(searchKeyword ||
            searchLocation ||
            filterJobType !== 'all' ||
            filterIndustry !== 'all') && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchKeyword('');
                setSearchLocation('');
                setFilterJobType('all');
                setFilterIndustry('all');
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {loading ? (
          <div className="py-12 text-center">Loading jobs...</div>
        ) : filteredJobs.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No jobs found matching your criteria.
            </p>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-muted-foreground">
              Found {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  company={job.companies.name}
                  location={job.location}
                  jobType={job.job_type}
                  salaryMin={job.salary_min}
                  salaryMax={job.salary_max}
                  industry={job.industry}
                  isFeatured={job.is_featured}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}