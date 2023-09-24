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
    "We start with an array representing the heights of bars. Here's our initial configuration. We'll visualize how the trapping rainwater algorithm works on this input.",
    "Now, we introduce two pointers: one starting from the left and the other from the right. These pointers will help us navigate through the bars.",
    "At each step, we compare the heights of the bars that the pointers are currently pointing to and move one pointer depending on the height.",
    "After moving the right pointer, the first condition it encounters allows us to find 'leftMax,' and we move the left pointer accordingly.",
    "After moving the left pointer, the left bar's height is smaller than that on the right, and it's also smaller than 'leftMax,' so we know we have trapped water.",
    "We repeat steps 3 to 5, comparing heights and moving the pointers until the left pointer reaches the right pointer.",
    "Here's our final visualization. The blue bars represent trapped water. The algorithm has completed."
  ];  

const imageSources = [
    "Images/Algorithm1.jpg",
    "Images/Algorithm2.jpg",
    "Images/Algorithm3.png",
    "Images/Algorithm4.png",
    "Images/Algorithm5.png",
    "Images/Algorithm6.png",
    "Images/Algorithm7.png"
];

const codeExplanation = [
    "",
    "We initialize two pointers: 'left' starting at 0 and 'right' starting at the last index of the array.",
    "If 'barHeights[left]' is less than 'barHeights[right]' (in our case, they are equal), we move the right pointer one step to the left using 'right--'.",
    "So now, 'barHeights[left]' is greater than 'barHeights[right]'. It goes inside the 'if' block. We update 'leftMax' to the new maximum height and move the left pointer one step to the right using 'left++'.",
    "At this point, 'barHeights[left]' is less than 'barHeights[right]', but 'barHeights[left]' is also less than 'leftMax'. This condition signifies that we have trapped water. We calculate the amount of trapped water using 'water += leftMax - barHeights[left]'.",
    "",
    ""
  ];

let currentStep = 1;
const totalSteps = stepTitles.length;

totalPages.textContent = totalSteps;

function updateCurrentStep() {
    currentPage.textContent = currentStep;
}

function updateContentForStep(step) {
    const titleElement = textContainer.querySelector("strong");
    titleElement.textContent = `Step ${step}: ${stepTitles[step - 1]}`;

    textContainer.querySelector("p").textContent = textContent[step - 1];

    const codeExplanationDiv = document.getElementById("codeExplanation");
    codeExplanationDiv.textContent = codeExplanation[step - 1];

    imageContainer.src = imageSources[step - 1];
}

nextPageBtn.addEventListener("click", () => {
  if (currentStep < totalSteps) {
      currentStep++;
  } else {
      currentStep = 1; 
  }
  updateCurrentStep();
  updateContentForStep(currentStep);
});

prevPageBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateCurrentStep();
        updateContentForStep(currentStep);
    }
});

updateContentForStep(currentStep);
updateCurrentStep();
