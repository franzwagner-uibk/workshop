const storageKey = "workshop-progress-v1";
const stepCards = Array.from(document.querySelectorAll("[data-step]"));
const stepCheckboxes = Array.from(
  document.querySelectorAll("[data-step-checkbox]")
);
const progressFill = document.querySelector("#progress-fill");
const progressText = document.querySelector("#progress-text");
const copyButtons = Array.from(document.querySelectorAll(".copy-button"));

function loadProgress() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveProgress(completedSteps) {
  window.localStorage.setItem(storageKey, JSON.stringify(completedSteps));
}

function updateProgress() {
  const completed = stepCheckboxes.filter((checkbox) => checkbox.checked).length;
  const total = stepCheckboxes.length;
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `${completed} of ${total} steps completed`;

  stepCards.forEach((card, index) => {
    card.classList.toggle("is-complete", stepCheckboxes[index].checked);
  });
}

function setInitialProgress() {
  const completedSteps = loadProgress();

  stepCheckboxes.forEach((checkbox, index) => {
    checkbox.checked = completedSteps.includes(index);
  });

  updateProgress();
}

stepCheckboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    const completedSteps = stepCheckboxes.reduce((list, input, currentIndex) => {
      if (input.checked) {
        list.push(currentIndex);
      }
      return list;
    }, []);

    saveProgress(completedSteps);
    updateProgress();
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const originalLabel = button.textContent;
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1200);
    } catch {
      button.textContent = "Select text";
    }
  });
});

setInitialProgress();
