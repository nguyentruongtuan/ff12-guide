'use client'

import { Bazaar } from "@/components/bazaar/bazaar-column"
import { Loot } from "@/components/loot/loot-column"
import { createContext, useContext, useState } from "react"

type SelectedBazaarContext = {
  loot: Loot[],
  addLoot: any
}


const defaultContext: SelectedBazaarContext = { loot: [], addLoot: () => { } }
export const BazaarContext = createContext<SelectedBazaarContext | unknown>(defaultContext)

export default function LootContextProvider({ children }: { children: React.ReactNode }) {

  const [loot, setLoot] = useState<Loot[]>([])

  const value = {
    loot,
    addLoot: (lootItem: Loot) => {
      loot.push(lootItem)
      setLoot([...loot])
    }
  }

  return (
    <BazaarContext.Provider value={value}>
      {children}
    </BazaarContext.Provider>
  )
}


export const BazaarLootSelected = () => {

  return useContext(BazaarContext) as SelectedBazaarContext
}