export function formatDate (date: string): string {
  if (!date) return ''

  const [year, month, day] = date.split('-')
  /* DD/MM/YYYY */
  return `${day}/${month}/${year}`
}
