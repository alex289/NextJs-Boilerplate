'use client';

import clsx from 'clsx';
import { Menu, Package2, Search } from 'lucide-react';
import { type User } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from './theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function getInitials(name: string) {
  const parts = name.split(' ');
  const initials = parts
    .slice(0, 3)
    .map((part) => part.charAt(0).toUpperCase());
  return initials.join('');
}

export default function Navbar({ user }: { user?: User }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="/"
          className={clsx(
            'transition-colors hover:text-foreground',
            isActive('/') ? 'text-foreground' : 'text-muted-foreground',
          )}>
          Dashboard
        </Link>
        <Link
          href="/chart"
          className={clsx(
            'transition-colors hover:text-foreground',
            isActive('/chart') ? 'text-foreground' : 'text-muted-foreground',
          )}>
          Charts
        </Link>
        <Link
          href="/table"
          className={clsx(
            'transition-colors hover:text-foreground',
            isActive('/table') ? 'text-foreground' : 'text-muted-foreground',
          )}>
          Table
        </Link>
        <Link
          href="/form"
          className={clsx(
            'transition-colors hover:text-foreground',
            isActive('/form') ? 'text-foreground' : 'text-muted-foreground',
          )}>
          Form
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/"
                className={clsx(
                  'transition-colors hover:text-foreground',
                  isActive('/') ? 'text-foreground' : 'text-muted-foreground',
                )}>
                Dashboard
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/chart"
                className={clsx(
                  'transition-colors hover:text-foreground',
                  isActive('/chart')
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}>
                Charts
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/table"
                className={clsx(
                  'transition-colors hover:text-foreground',
                  isActive('/table')
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}>
                Table
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/form"
                className={clsx(
                  'transition-colors hover:text-foreground',
                  isActive('/form')
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}>
                Form
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={user.image ?? ''} alt={user.email ?? ''} />
                  <AvatarFallback>
                    {getInitials(user.name ?? '')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn('github')}>Login</Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
