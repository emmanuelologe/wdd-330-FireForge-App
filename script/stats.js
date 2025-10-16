import { qs } from "./utils.js";

// Select DOM elements
const totalWorkoutsEl = qs("#totalWorkouts");
const totalMinutesEl = qs("#totalMinutes");
const progressBar = qs("#progressBar");

// Get stored workouts
const workouts = JSON.parse(localStorage.getItem("workouts")) || [];

// Compute totals
let totalWorkouts = workouts.length;
let totalMinutes = workouts.reduce((sum, w) => sum + Number(w.duration || 0), 0);

// Update UI
totalWorkoutsEl.textContent = totalWorkouts;
totalMinutesEl.textContent = totalMinutes;

// Animate progress bar toward a weekly goal (e.g., 300 minutes)
const weeklyGoal = 300;
const progress = Math.min((totalMinutes / weeklyGoal) * 100, 100);

progressBar.style.width = "0%";
setTimeout(() => {
  progressBar.style.width = progress + "%";
  progressBar.setAttribute("aria-valuenow", progress);
}, 200);