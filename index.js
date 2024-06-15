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

        // error handling for retrieving the JSON file
        try {
            const response = await fetch("/data.json"); //fetch() returns response object (after being resolved with await)

            // error handling for parsing response object into a JSON file
            try {
                const data = await response.json(); // response.json() parses response object into json (after being resolved with await)
                return data

            } catch (jsonError) {
                alert("Error: Failed to parse JSON data.");
            }
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





