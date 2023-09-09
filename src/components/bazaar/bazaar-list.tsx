'use client'

import { loot as LootData } from '@/components/loot/bazaar-loot-data';
import BazaarListItem from "./bazaar-list-item";
import { BazaarLootSelected } from '@/context/bazaar-context';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { useState } from 'react';
export default function BazaarList() {

  const [filterdData, setFilterdData] = useState(LootData)
  const [filterText, setFilterText] = useState('')


  const handleFilter = (value: string) => {

    setFilterText(value)

    const filterdData = LootData.filter(l => l.name.match(value))
    setFilterdData([...filterdData])
  }


  const { addLoot } = BazaarLootSelected()

  return (
    <>
      <div className="sm:w-full xl:w-96 flex flex-col h-full">

        <Input value={filterText} onChange={(e) => handleFilter(e.target.value)} type='text' placeholder='search' />

        <Separator />

        {filterdData.map(lootItem => (<BazaarListItem addItem={addLoot} key={lootItem.id} item={lootItem} />))}
      </div>
    </>
  )
}