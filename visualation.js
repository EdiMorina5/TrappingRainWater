function visualize() {
    const barHeightsInput = document.getElementById("barHeights").value;
    const barHeights = barHeightsInput.split(",").map(Number);

    const n = barHeights.length;
    const size = n - 1;
    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = size;
    let bars = barHeights.map((height, i) => ({
      height,
      x: i * 50 + (n * 50 * 0.4),
      y: 0,
      width: 40,
      trappedWater: 0,
      isTrappingWater: false,
    }));

    const svg = d3.select("#visualization");

    svg.selectAll("*").remove();

    // Draw the bars
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

    // Draw the water bars
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

    // Draw the maximum water value
    const maxWaterValue = document.getElementById("maxWaterValue");
    maxWaterValue.textContent = "Maximum water: " + water;
  }

