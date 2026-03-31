import type { LucideIcon } from "lucide-react"
import { Wrench, Truck } from "lucide-react"

export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    title: "Сервис",
    description: "Техническое обслуживание и ремонт медицинского оборудования",
    icon: Wrench,
  },
  {
    title: "Комплексное оснащение",
    description: "Полный цикл оснащения медицинских учреждений под ключ",
    icon: Truck,
  },
]
