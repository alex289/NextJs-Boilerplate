'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-5xl font-semibold">404 - Page not found</h1>
      <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button className="mt-4" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go back
      </Button>
    </div>
  );
}
