/**
 * Get the base path for the application
 * @returns The base path for the application
 */
export function getBasePath(): string {
  // カスタムドメインを使用する場合は空文字列を返す
  return ''
  // GitHub Pages サブディレクトリの場合は以下を使用
  // return process.env.NODE_ENV === 'production' ? '/uphash-web' : ''
}

/**
 * Get the correct image path with basePath prepended
 * @param path The image path starting with /
 * @returns The full image path with basePath
 */
export function getImagePath(path: string): string {
  const basePath = getBasePath()
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}