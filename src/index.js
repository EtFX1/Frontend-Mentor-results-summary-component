let avgScore = document.querySelector(".avg-score");
const button = document.querySelector(".continue-btn");


button.addEventListener("click", () => {
  displayData();
})


// *function that retrieves and displays json data
async function displayData() {
  async function getData() {

    // retrieving array from json file
    const response = await fetch("/data.json")
    const data = await response.json();
    return data;
  }

  // extracting the scores from the array
  const [one, two, three, four] = await getData();

  const score1 = one.score;
  const score2 = two.score;
  const score3 = three.score;
  const score4 = four.score;

  const average = Math.floor((score1 + score2 + score3 + score4) / 4);

  avgScore.innerText = average
};





