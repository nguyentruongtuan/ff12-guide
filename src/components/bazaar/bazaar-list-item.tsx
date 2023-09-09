'use client'


import { Button } from "../ui/button"

type LootType = {
  name: string
}

export default function BazaarListItem({ item, addItem }: { item: LootType, addItem: any }) {

  const addItemTolist = (_item: LootType) => {

    addItem(_item)
  }

  return (
    <>
      <div className="flex justify-between items-center bg-slate-300 p-5 rounded-md mt-3">
        <span className="text-slate-900">{item.name}</span>
        <Button onClick={() => addItemTolist(item)}>Add to list</Button>
      </div>
    </>
  )
}