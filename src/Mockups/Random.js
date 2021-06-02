import { DateTime } from 'luxon'
import Server from '../Icons/Server.svelte'
import Monitor from '../Icons/Monitor.svelte'

const n = () => (Math.random() * 10).toFixed(0)

export function randomNumber () {
  return `${n()}${n()}${n()}-${n()}${n()}${n()}${n()}`
}

export function randomYear () {
  return `20${n()}${n()}`
}

export function randomProduct () {
  const products = ['AnanasBook', 'CherryBook', 'PearBook', 'OrangeBook']
  return products[Math.floor(Math.random() * products.length)]
}

export function randomTitle (year, product) {
  return `A${n()}${n()}${n()}${n()} ${year || randomYear()} ${n()}${n()}” ${product || randomProduct()}`
}

export function randomDateTime () {
  return DateTime.fromJSDate(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
}

export function randomIcon () {
  const icons = [Server, Monitor]
  return icons[Math.floor(Math.random() * icons.length)]
}
