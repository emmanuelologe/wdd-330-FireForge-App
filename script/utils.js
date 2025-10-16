// ===== DOM Utilities =====
export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => scope.querySelectorAll(selector);
export const qs = (sel) => document.querySelector(sel);

// ===== Date & Number Utilities =====
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};

export const formatTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}h ${m}m` : `${m} min`;
};

// ===== Local Storage Helpers =====
export const saveToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
export const getFromStorage = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

// Create element with optional class
export const createEl = (tag, className = "") => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  return el;
};

// ===== Random Helper =====
export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];