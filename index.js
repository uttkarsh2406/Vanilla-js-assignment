function trap(height) {
  let s = height.length;

  let f = new Array(s).fill(0);
  let b = new Array(s).fill(0);
  f[0] = height[0];
  for (let i = 1; i < s; i++) {
    f[i] = Math.max(f[i - 1], height[i]);
  }
  b[s - 1] = height[s - 1];
  for (let i = s - 2; i >= 0; i--) {
    b[i] = Math.max(b[i + 1], height[i]);
  }
  let res = new Array(s);
  for (let i = 0; i < s; i++) {
    res[i] = Math.abs(Math.min(f[i], b[i]) - height[i]);
  }
  // console.log(res);
  return res;
}
let flag = false;
let form = document.getElementById("input-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("tabb").innerHTML = "";
  let heights = form.elements.heights.value.split(",").map(Number);
  let water = trap(heights);
  let result = 0;
  for (var i = 0; i < water.length; i++) {
    result += water[i];
  }
  let rows = Math.max(...heights);
  let cols = heights.length;
  // console.log(cols);
  var table = document.createElement("table");

  // Create the table rows and columns
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      if (i >= rows - heights[j]) {
        cell.style.backgroundColor = "red";
      } else if (i >= rows - water[j] - heights[j]) {
        cell.style.backgroundColor = "blue";
      }
      row.appendChild(cell);
    }
    document.getElementById("tabb").appendChild(row);
  }
  document.getElementById("result").innerHTML = result;
});
