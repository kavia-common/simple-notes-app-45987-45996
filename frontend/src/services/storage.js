export class Storage {
  /**
   * Simple namespaced wrapper around browser localStorage with JSON serialization.
   * Falls back gracefully when localStorage is unavailable.
   */
  constructor(namespace = 'app') {
    this.ns = namespace;
    this.ok = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  _k(key) {
    return `${this.ns}:${key}`;
  }

  get(key) {
    if (!this.ok) return null;
    try {
      const raw = localStorage.getItem(this._k(key));
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  set(key, value) {
    if (!this.ok) return;
    try {
      localStorage.setItem(this._k(key), JSON.stringify(value));
    } catch {
      // ignore quota errors
    }
  }

  remove(key) {
    if (!this.ok) return;
    try {
      localStorage.removeItem(this._k(key));
    } catch {
      // noop
    }
  }
}
