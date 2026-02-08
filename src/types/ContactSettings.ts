export interface ContactSettings {
  email?: string
  phone?: {
    display?: string
    dial?: string
  }
  whatsapp?: {
    display?: string
    dial?: string
    defaultMessage?: string
  }
}
