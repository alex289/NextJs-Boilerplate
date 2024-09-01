'use client';

import { useQueryState } from 'nuqs';
import { toast } from 'sonner';

import { DialogExample } from '@/components/dialog-example';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [name, setName] = useQueryState('name');
  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 dark:text-gray-200 md:text-[5rem]">
          Next.Js <span className="text-indigo-500">Boilerplate</span>
        </h1>
      </div>

      <div className="flex md:flex-row flex-col gap-4">
        <Button onClick={() => toast('Event has been created.')}>
          Toast example
        </Button>

        <DialogExample />

        <Input
          value={name ?? ''}
          onChange={(e) => setName(e.target.value)}
          className="w-50"
        />
      </div>
    </>
  );
};

export default Index;
