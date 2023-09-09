"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Bazaar = {
  Name: string
  Cost: number
  Reward: string[]
  Loots: {
    quantity: number,
    lootId: number
  }[]
}

export const columns: ColumnDef<Bazaar>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Cost",
    header: "Cost",
  },
  {
    accessorKey: "Reward",
    header: "Reward",
  },
  {
    accessorKey: "LootToSell",
    header: "LootToSell",
  },
]
