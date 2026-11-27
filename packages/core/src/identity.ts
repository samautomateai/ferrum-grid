export function validateRowId(id: string): string {
  if (id.trim().length === 0) throw new Error('Row ID must not be empty');
  return id;
}
