//const url = "https://jsonplaceholder.typicode.com/posts/1";
//const url = "https://jsonplaceholder.typicode.com/todos/1";
//your JS code here. If required.
// Define the async function with a callback parameter
async function fetchData(callback) {
  try {
    // Wait for the response from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    // Call the callback function with the data
    callback(data.title);
  } catch (error) {
    console.error(error);
  }
}

// Get the DOM elements
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Attach a click event listener to the button
button.addEventListener('click', async () => {
  // Call the async function with a callback function that updates the output div
  fetchData((title) => {
    output.textContent = title;
  });
});