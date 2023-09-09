import { loot as LootData } from '@/components/loot/bazaar-loot-data'
import { Loot } from './loot-column'
import { BazaarLootSelected } from '@/context/bazaar-context'

export default function LootListItem({ lootItem }: { lootItem: { quantity: number, lootId: number } }) {



  const { loot } = BazaarLootSelected()

  const currentLoot = LootData.find(l => l.id === lootItem.lootId) as Loot

  return (
    <div className={loot.some(l => l.id === lootItem.lootId) ? "bg-yellow-300" : ""}>
      {currentLoot.name} x{lootItem.quantity}
    </div>
  )
}