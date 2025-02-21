// Arrays for story elements
const characters = ["The cat", "The dog", "The turkey", "The elephant", "Mom","Dad","My teacher"];
const actions = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
const adjectives = ["a funny", "a scary", "a goof", "a slimy", "a barking","a fact"];
const animals = ["goat", "monkey","fish","cow","frog","bug","worm"];
const places = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass","in my shoes"];


// Function to generate a random story
function generateRandomStory() {
    console.log("Button clicked!");
    // Randomly select an element from each array
    const character = characters[Math.floor(Math.random() * characters.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    // Create the story text
    const storyText = `${character} ${action} ${place} ${adjective} ${animal} .`;

    // Display the story text
    document.getElementById("storyText").textContent = storyText;

    // Create audio for the story
    const audio = document.getElementById("storyAudio");
    const storyAudio = new SpeechSynthesisUtterance(storyText);
    window.speechSynthesis.speak(storyAudio);
}

// Event listener for the button
document.getElementById("generateStoryBtn").addEventListener("click", generateRandomStory);
