function visualize() {
    const barHeightsInput = document.getElementById("barHeights").value;
    const barHeights = barHeightsInput.split(",").map(Number);

    const isInvalid = barHeights.some(number => number > 9);

    if (isInvalid) {
        document.getElementById("errorText").textContent = "We only visualize bar heights under 9";
        inputField.value = numbers.map(number => Math.min(number, 9)).join(",");
    } else {
       document.getElementById("errorText").textContent = "";
    }

    const n = barHeights.length;
    const size = n - 1;
    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = size;
    let spacing = 41; 
    let bars = barHeights.map((height, i) => ({
      height,
      x: i * spacing + (n * spacing * 0.4),
      y: 0,
      width: 40,
      trappedWater: 0,
      isTrappingWater: false,
    }));

    const svg = d3.select("#visualization");

    svg.selectAll("*").remove();

    svg
      .selectAll(".bar")
      .data(bars)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => d.x)
      .attr("y", (d) => 300 - d.height * 30)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height * 30);

    while (left < right) {
      if (barHeights[left] < barHeights[right]) {
        if (barHeights[left] > leftMax) {
          leftMax = barHeights[left];
        } else {
          water += leftMax - barHeights[left];
          bars[left].isTrappingWater = true;
          bars[left].trappedWater = leftMax - barHeights[left];
        }
        left++;
      } else {
        if (barHeights[right] > rightMax) {
          rightMax = barHeights[right];
        } else {
          water += rightMax - barHeights[right];
          bars[right].isTrappingWater = true;
          bars[right].trappedWater = rightMax - barHeights[right];
        }
        right--;
      }
    }

    svg
      .selectAll(".water")
      .data(bars)
      .enter()
      .append("rect")
      .attr("class", "water")
      .attr("x", (d) => d.x)
      .attr("y", (d) => 300 - (d.height + d.trappedWater) * 30)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.trappedWater * 30)
      .attr("fill", "#0000ff")
      .attr("opacity", (d) => (d.isTrappingWater ? 1 : 0));

    const maxWaterValue = document.getElementById("maxWaterValue");
    maxWaterValue.textContent = "Maximum water: " + water;
  }

