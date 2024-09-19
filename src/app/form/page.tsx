'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAction } from 'next-safe-action/hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginUser } from './profile-action';
import userSchema from './schema';

export default function FormPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: '',
    },
  });

  const { execute: onSubmit } = useAction(loginUser, {
    onExecute: () => {
      setIsLoading(true);
    },
    onSuccess: ({ data }) => {
      setIsLoading(false);

      if (data?.success) {
        toast.success(data.success);
        return;
      }

      if (data?.failure) {
        toast.error(data.failure);
      }
    },
    onError: ({ error }) => {
      setIsLoading(false);

      if (error.fetchError) {
        toast.error(error.fetchError);
        return;
      }
      if (error.serverError) {
        toast.error(error.serverError);
        return;
      }
      if (error.validationErrors?._errors) {
        for (const message of error.validationErrors._errors) {
          toast.error(message);
        }
        return;
      }
    },
  });

  return (
    <div className="container mx-auto py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
