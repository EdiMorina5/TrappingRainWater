const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");

const stepTitles = [
    "Initialization",
    "Left and Right Pointers",
    "Comparing Heights",
    "Trapping Water (Left Pointer Moves)",
    "Updating LeftMax",
    "Repeat Steps 3-5",
    "Final Visualization"
];

const textContent = [
    "We start with an array representing the heights of bars. Here's our initial configuration. We'll be visualizing how the trapping rainwater algorithm works on this input",
    "Now, we introduce two pointers—one starting from the left and the other from the right. These pointers will help us navigate through the bars.",
    "At each step, we compare the heights of the bars that the pointers are currently pointing to",
    "In this case, the left pointer points to a shorter bar than the right pointer. We'll move the left pointer one step to the right.",
    "As the left pointer moves, we update the maximum height it has encountered on its left",
    "We repeat steps 3 to 5, comparing heights and moving the pointers until the left pointer reaches the right pointer",
    "Here's our final visualization. The blue bars represent trapped water. The algorithm has completed."
];

const imageSources = [
    "Algorithm.png",
    "Algorithm.png",
    "Algorithm.png",
    "Algorithm.png",
    "Algorithm.png",
    "Algorithm.png",
    "Algorithm6.png"
];

const codeExplanation = [
    "",
    "Initialize two pointers, left starting at 0 and right starting at the last index of the array",
    "If barHeights[left] < barHeights[right], move the left pointer one step to the right: left++.",
    "If barHeights[left] > leftMax, update leftMax to the new maximum height.",
    "",
    "",
    ""
]

let currentStep = 1;
const totalSteps = stepTitles.length;

// Initialize total pages
totalPages.textContent = totalSteps;

// Update the current step and format
function updateCurrentStep() {
    currentPage.textContent = currentStep;
}

// Function to update content and images for the current step
function updateContentForStep(step) {
    const titleElement = textContainer.querySelector("strong");
    titleElement.textContent = `Step ${step}: ${stepTitles[step - 1]}`;

    // Update the text content based on the step number
    textContainer.querySelector("p").textContent = textContent[step - 1];

    const codeExplanationDiv = document.getElementById("codeExplanation");
    codeExplanationDiv.textContent = codeExplanation[step - 1];

    // Update the image source based on the step number
    imageContainer.src = imageSources[step - 1];
}

// Event listener for the "Next" button
nextPageBtn.addEventListener("click", () => {
  if (currentStep < totalSteps) {
      currentStep++;
  } else {
      currentStep = 1; // Go back to the first step if at the last step
  }
  updateCurrentStep();
  updateContentForStep(currentStep);
});

// Event listener for the "Previous" button
prevPageBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateCurrentStep();
        updateContentForStep(currentStep);
    }
});

// Initialize content for the first step
updateContentForStep(currentStep);
updateCurrentStep();
