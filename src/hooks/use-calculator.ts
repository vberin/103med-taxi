import { useState, useMemo } from 'react'

const BASE_PRICE = 800
const PRICE_PER_KM = 30
const FLOOR_PRICE = 100
const WEIGHT_SURCHARGE = 300

export function useCalculator() {
  const [distance, setDistance] = useState(0)
  const [floor, setFloor] = useState(0)
  const [weight, setWeight] = useState(false)
  const [elevator, setElevator] = useState(true)

  const price = useMemo(() => {
    let total = BASE_PRICE
    total += distance * PRICE_PER_KM
    if (!elevator) {
      total += floor * FLOOR_PRICE
    }
    if (weight) {
      total += WEIGHT_SURCHARGE
    }
    return total
  }, [distance, floor, weight, elevator])

  return {
    price,
    distance,
    setDistance,
    floor,
    setFloor,
    weight,
    setWeight,
    elevator,
    setElevator,
  }
}