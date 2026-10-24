```javascript
// Get the form and the story element
const form = document.getElementById("libform");
const storyElement = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

// Store the user's words
let words = {};

// Create different story templates
const stories = [
    "One day, {person} took a {adjective} {noun} to {place} to {verb}. Everyone was surprised!",
    
    "Yesterday, {person} found a {adjective} {noun} in {place}. Suddenly, it started to {verb}!",
    
    "In {place}, {person} saw a {adjective} {noun} that could {verb}. What a strange day!",
    
    "Breaking news! {person} decided to {verb} with a {adjective} {noun} in {place}.",
    
    "{person} went to {place} carrying a {adjective} {noun}. The {noun} wanted to {verb} all day!"
];

// Keep track of the last displayed story
let lastStoryIndex = -1;

// Generate a random story different from the previous one
function generateStory() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * stories.length);
    } while (randomIndex === lastStoryIndex);

    lastStoryIndex = randomIndex;

    // Replace each placeholder with the user's words
    let newStory = stories[randomIndex];

    newStory = newStory.replaceAll("{noun}", words.noun);
    newStory = newStory.replaceAll("{adjective}", words.adjective);
    newStory = newStory.replaceAll("{person}", words.person);
    newStory = newStory.replaceAll("{verb}", words.verb);
    newStory = newStory.replaceAll("{place}", words.place);

    // Display the story
    storyElement.textContent = newStory;
}

// Handle form submission
form.addEventListener("submit", function(event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Get and trim the input values
    words = {
        noun: document.getElementById("noun").value.trim(),
        adjective: document.getElementById("adjective").value.trim(),
        person: document.getElementById("person").value.trim(),
        verb: document.getElementById("verb").value.trim(),
        place: document.getElementById("place").value.trim()
    };

    // Check that no value is empty
    if (Object.values(words).some(word => word === "")) {
        alert("Please fill in all the fields!");
        return;
    }

    // Reset the previous index for a new game
    lastStoryIndex = -1;

    // Generate the first story
    generateStory();
});

// Handle the Shuffle button
shuffleButton.addEventListener("click", function() {
    // Do not shuffle until the user has generated a story
    if (Object.keys(words).length === 0) {
        alert("Please fill in the form and click Lib it! first.");
        return;
    }

    generateStory();
});
```