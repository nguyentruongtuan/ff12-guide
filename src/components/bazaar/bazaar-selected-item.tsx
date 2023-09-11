'use client'

import LootListItem from "../loot/loot-list-item";
import { Bazaar } from "./bazaar-column";

export default function BazaarSelectedItem({ bazaar }: { bazaar: Bazaar }) {


  return (
    <div className="w-full flex flex-col p-5 bg-slate-200 mb-2 ">
      <span className='font-bold'>
        {bazaar.Name}
      </span>
      <div className="ml-3 items-end flex flex-col">
        {bazaar.Loots.map(l => <LootListItem key={l.lootId} lootItem={l} />)}
      </div>
    </div>
  )

}