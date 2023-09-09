const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./bazaar-zodiac.json', 'utf-8'))
const lootArr = JSON.parse(fs.readFileSync('./items.json', 'utf-8'))


for (const bazaar of data) {

  bazaar.Loots = []

  for (const loot of bazaar.LootToSell) {
    const str = loot.split(" ")
    const quantity = str.pop()
    const lootItem = lootArr.find(it => it.name === str.join(" ").trim())

    bazaar.Loots.push({
      quantity: Number(quantity.replace('x', '')),
      lootId: lootItem.id
    })

    delete bazaar.LootToSell
  }

}


fs.writeFileSync('./bazaar1.json', JSON.stringify(data))