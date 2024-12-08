import fs from 'fs'
import path from 'path'

const CACHE_DIR = path.join(process.cwd(), '.cache')
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour in milliseconds

export function readCache<T>(key: string): T | null {
  const cacheFile = path.join(CACHE_DIR, `${key}.json`)
  
  if (fs.existsSync(cacheFile)) {
    const { data, timestamp } = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'))
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data as T
    }
  }
  
  return null
}

export function writeCache<T>(key: string, data: T): void {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
  }
  
  const cacheFile = path.join(CACHE_DIR, `${key}.json`)
  fs.writeFileSync(cacheFile, JSON.stringify({ data, timestamp: Date.now() }))
}

