import { qs, createEl } from "./utils.js";

// DOM elements
const form = qs("#logForm");
const logList = qs("#logList");
const clearBtn = qs("#clearBtn");
const emptyMsg = qs("#emptyMsg");

// Load existing workouts from localStorage
let workouts = JSON.parse(localStorage.getItem("workouts")) || [];

// Render the list
function renderWorkouts() {
  logList.innerHTML = "";
  if (workouts.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";
  workouts.forEach((workout, i) => {
    const li = createEl("li", "log-item");
    li.innerHTML = `
      <strong>${workout.exercise}</strong> — 
      ${workout.sets} sets × ${workout.reps} reps (${workout.duration} min)
      <button class="delete-btn" data-index="${i}">×</button>
    `;
    logList.appendChild(li);
  });
}

// Save workouts to localStorage
function saveWorkouts() {
  localStorage.setItem("workouts", JSON.stringify(workouts));
  renderWorkouts();
}

// Add new workout
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const workout = {
    exercise: form.exercise.value.trim(),
    sets: form.sets.value,
    reps: form.reps.value,
    duration: form.duration.value || 0,
  };
  workouts.push(workout);
  saveWorkouts();
  form.reset();
});

// Delete a workout
logList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;
    workouts.splice(index, 1);
    saveWorkouts();
  }
});

// Clear all workouts
clearBtn.addEventListener("click", () => {
  if (confirm("Clear all logged workouts?")) {
    workouts = [];
    saveWorkouts();
  }
});

// Initial render
renderWorkouts();