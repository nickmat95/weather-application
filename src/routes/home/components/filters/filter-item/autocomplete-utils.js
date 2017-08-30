export function matchItemToTerm(item, value) {
  return (
    item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function sortItems(a, b, value) {
  const aLower = a.name.toLowerCase()
  const bLower = b.name.toLowerCase()
  const valueLower = value.toLowerCase()
  const queryPosA = aLower.indexOf(valueLower)
  const queryPosB = bLower.indexOf(valueLower)
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB
  }
  return aLower < bLower ? -1 : 1
}

/*export function getTowns() {
  return [
    { name: 'Saint-Petersburg' },
    { name: 'Pavlovsk' },
    { name: 'Pushkin' },
    { name: 'Zheleznogorsk' },
    { name: 'Sosnovoborsk' }
  ]
}

export function getRegions() {
  return [
    { name: 'Leningrad region' },
    { name: 'Krasnoyarsk region' }
  ]
}*/