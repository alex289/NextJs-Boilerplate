import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Copy, Edit, Trash2 } from 'lucide-react';

export default function UserMenu() {
  return (
    <div className="mr-4 mt-[2px] text-right">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus-visible:ring-black">
            Options
            <ChevronDown
              className="-mr-1 ml-2 h-5 w-5 text-indigo-200 hover:text-indigo-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-violet-500 text-white'
                        : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <Edit className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Edit
                        className="mr-2 h-5 w-5 text-violet-500"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-violet-500 text-white'
                        : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <Copy className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Copy
                        className="mr-2 h-5 w-5 text-violet-500"
                        aria-hidden="true"
                      />
                    )}
                    Duplicate
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? 'bg-violet-500 text-white'
                        : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <Trash2 className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Trash2
                        className="mr-2 h-5 w-5 text-violet-500"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
