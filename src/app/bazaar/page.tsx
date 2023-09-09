'use client'

import { Bazaar } from '@/components/bazaar/bazaar-column'
import { data } from '@/components/bazaar/bazaar-data'
import BazaarSelectedItem from '@/components/bazaar/bazaar-selected-item'
import { Button } from '@/components/ui/button'
import { BazaarLootSelected } from '@/context/bazaar-context'
import Link from 'next/link'
import { useState } from 'react'

export default function BazaarPage() {

  const { loot } = BazaarLootSelected()


  if (!loot) {
    return (
      <main className="flex min-h-screen flex-col justify-between p-5 font-sans items-center">


        <Button asChild>
          <Link href={"/"}>Back</Link>
        </Button>
      </main>
    )
  }

  const filteredBazaared = data.filter(b => {

    return b.Loots.some(l => loot.find(({ id }) => id === l.lootId))
  })

  console.log(loot, filteredBazaared)

  return (
    <main className="flex min-h-screen flex-col justify-between p-5 font-sans items-center">


      <Button asChild>
        <Link href={"/"}>Back</Link>
      </Button>

      <div className='flex flex-col w-full'>

        {filteredBazaared.map((sB) => <BazaarSelectedItem key={sB.Name} bazaar={sB} />)}

      </div>
    </main>
  )
}