'use client'

import BazaarList from '@/components/bazaar/bazaar-list';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen  flex-col justify-between p-5 font-sans items-center">

      <Button className='xl:w-80 w-60' asChild>
        <Link href={"/bazaar"}>Bazaar</Link>
      </Button>

      <Separator className='my-4' />
      <BazaarList />


    </main>
  )
}
