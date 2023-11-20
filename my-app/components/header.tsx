// Continue here 

// Check auth to see the alternative in the nav bar! 
// This should be ok easy to get done. 

'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"



interface HeaderProps {
  title: string
}

export function Header ({
  title,
}: HeaderProps) {


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: '/documentation' },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const pathname = usePathname();
  return (
    <div className="shrink-0 flex items-center justify-between h-12 px-3 bg-gray-100">
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}


// Let the header component use