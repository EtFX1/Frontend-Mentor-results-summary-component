const avgScore = document.querySelector(".avg-score");

// error handling for if the class is not found 
if (!avgScore) {
    console.error("Error: Element with class 'avg-score' not found.")
} else {
    displayAvgScore();
}


// *function that retrieves and displays json data
async function displayAvgScore() {
    async function getData() {

        // error handling for if there's an error retrieving the JSON file
        try {
            // retrieving array from json file
            const response = await fetch("/data.json");
            const data = await response.json();
            return data;
        }

        catch (error) {
            alert("Error:  JSON file not found");
        }

    }

    // extracting the scores from the JSON array
    const [one, two, three, four] = await getData();

    // calculation of the array  
    const average = Math.floor((one.score + two.score + three.score + four.score) / 4);


    // setting the html to these final result
    avgScore.innerText = average;
};





