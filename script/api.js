import { $, randomItem } from './utils.js';

const quoteEl = $('#quote');

// ===== Motivational Quote API =====
export async function fetchQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/today");
    if (!res.ok) throw new Error("Failed to fetch quote");
    const data = await res.json();
    return data[0].q + " — " + data[0].a;
  } catch (err) {
    console.error(err);
    return "Keep going — your progress defines you!";
  }
}

// ===== Exercise Data API (will be used in tracker.js) =====
export async function fetchExercises(muscle = "chest") {
  const apiKey = "hRHqi1OGrr6irwCN+bHSQQ==s0Bp0IaAGpgQ4Kuv"; // 🔑 Replace with your real API key from api-ninjas.com
  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: { "X-Api-Key": apiKey },
    });
    if (!res.ok) throw new Error("Failed to fetch exercises");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}