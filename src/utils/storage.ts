const STORAGE_KEY = 'ops-quality-loop-state';

export interface StorageResult<T> {
  data: T | null;
  error: string | null;
}

export function saveToStorage<T>(key: string, value: T): StorageResult<void> {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return { data: undefined, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage write failed';
    return { data: null, error: message };
  }
}

export function loadFromStorage<T>(key: string): StorageResult<T> {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { data: null, error: null };
    const parsed = JSON.parse(raw) as T;
    return { data: parsed, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage read failed';
    return { data: null, error: message };
  }
}

export function removeFromStorage(key: string): StorageResult<void> {
  try {
    localStorage.removeItem(key);
    return { data: undefined, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage remove failed';
    return { data: null, error: message };
  }
}

export function clearAllStorage(): StorageResult<void> {
  try {
    localStorage.clear();
    return { data: undefined, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Storage clear failed';
    return { data: null, error: message };
  }
}

export function saveAppState<T>(value: T): StorageResult<void> {
  return saveToStorage(STORAGE_KEY, value);
}

export function loadAppState<T>(): StorageResult<T> {
  return loadFromStorage<T>(STORAGE_KEY);
}
