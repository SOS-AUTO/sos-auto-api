// src/common/utils/sanitize-data.ts
export function sanitizeData<T extends { password?: string }>(data: T) {
  const sanitized: any = { ...data };

  // Normaliza datas (converte strings contendo "date" para instâncias Date)
  for (const key in sanitized) {
    if (
      key.toLowerCase().includes('date') &&
      typeof sanitized[key] === 'string'
    ) {
      sanitized[key] = new Date(sanitized[key]);
    }
  }

  // Remove o password (não precisamos salvar no banco local)
  if ('password' in sanitized) {
    delete sanitized.password;
  }

  return sanitized;
}
