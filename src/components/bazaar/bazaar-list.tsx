'use client'

import { loot as LootData } from '@/components/loot/bazaar-loot-data';
import BazaarListItem from "./bazaar-list-item";
import { BazaarLootSelected } from '@/context/bazaar-context';
export default function BazaarList() {

  const { addLoot } = BazaarLootSelected()

  return (
    <>
      <div className="sm:w-full xl:w-96 ">

        {LootData.map(lootItem => (<BazaarListItem addItem={addLoot} key={lootItem.id} item={lootItem} />))}
      </div>
    </>
  )
}