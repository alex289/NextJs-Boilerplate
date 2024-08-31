'use client';

import { toast } from 'sonner';

import { DialogExample } from '@/components/dialog-example';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 dark:text-gray-200 md:text-[5rem]">
          Next.Js <span className="text-indigo-500">Boilerplate</span>
        </h1>
      </div>

      <div className="flex gap-4">
        <Button onClick={() => toast('Event has been created.')}>
          Toast example
        </Button>

        <DialogExample />
      </div>
    </>
  );
};

export default Index;
