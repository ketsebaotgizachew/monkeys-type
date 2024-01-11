sample_text = `paragraph is a group of sentences or a single sentence that supports one main idea. The length of a paragraph can vary depending on the writer's preference and thecontext of the writing. According to a blog post by **The Blue Book of Grammar and Punctuation**, a standard paragraph typically contains at least two sentences. A short paragraph might include fifty words or fewer, and a long one might contain 150 to 200 words. Beyond 200 words, the writer might consider how to break the longer paragraph. 

When writing a paragraph, it is important to have a clear and concise topic sentence that expresses the main idea of the paragraph. The sentences that follow should support the topic sentence and provide evidence or examples to back up the main idea. The sentences should be arranged in a logical manner and should follow a definite plan for development. Finally, the paragraph should be concluded with a sentence that summarizes the main idea and leads into the next paragraph.

I hope this helps! Let me know if you have any other questions.

Source: Conversation with Bing, 01/01/2024
(1) How Long Is a Paragraph? - The Blue Book of Grammar and Punctuation. https://www.grammarbook.com/blog/effective-writing/how-long-is-a-paragraph/.
(2) Paragraphs – The Writing Center • University of North Carolina at .... https://writingcenter.unc.edu/tips-and-tools/paragraphs/.
(3) Random Paragraph Generator — 1000's of random paragraphs. https://randomwordgenerator.com/paragraph.php.
(4) How Long Should a Paragraph Be? - DAILY WRITING TIPS. https://www.dailywritingtips.com/how-long-should-a-paragraph-be/.
(5) Paragraphing - Purdue OWL® - Purdue University. https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/paragraphing.html`;

// Select the div with id 'populated'
let div = document.getElementById("populated");

// Create a div with the class 'pointer' and append it to 'populated'
let pointer = document.createElement("div");
pointer.classList.add("pointer");
div.appendChild(pointer);

// Split the text into characters
// Split the text into characters
// Split the text into characters
let characters = sample_text.split("");

// Iterate over each character
for (let i = 0; i < characters.length; i++) {
    // Create a new span element for the character
    let span = document.createElement("span");

    // Add the character to the span
    span.textContent = characters[i];

    // If the character is a space, add the 'space' class
    if (characters[i] === " ") {
        span.classList.add("space");
    }

    // If the character is the start of a word, add the 'starter' class
    if (i === 0 || characters[i - 1] === " ") {
        span.classList.add("starter");
    }

    // Append the span to the div
    div.appendChild(span);
}
// Listen for keyboard input
document.addEventListener("keydown", function (e) {
    // Start the timer when the first key is pressed
    if (startTime === null) {
        startTime = new Date();
    }

    // Count the words
    if (e.key.length === 1 || e.key === " ") {
        let spans = div.getElementsByTagName("span");

        if (pointer.nextSibling && pointer.nextSibling.nodeName !== "#text") {
            if (e.key === pointer.nextSibling.textContent) {
                
                pointer.nextSibling.classList.add("correct");
                // If the character is a space or the end of the text, increment the word count
                if (e.key === " " || pointer.nextSibling.nextSibling === null) {
                    wordCount++;
                }
            } else {
                pointer.nextSibling.classList.add("wrong");
            }
            div.insertBefore(pointer, pointer.nextSibling.nextSibling);
        }
    }
    pointer.scrollIntoView({behavior: "smooth", block: "center"});
    if (e.key === "Backspace") {
        // If the pointer is not at the start of the text
        if (pointer.previousSibling) {
            // Move the pointer to the previous span or space
            div.insertBefore(pointer, pointer.previousSibling);

            // Remove the 'correct' or 'wrong' class from the span
            if (pointer.nextSibling.nodeName !== "#text") {
                pointer.nextSibling.classList.remove("correct", "wrong");
            }
        }
    }
});

let startTime = null;
let wordCount = 0;

setInterval(function () {
    // Calculate the time elapsed in minutes
    let timeElapsed = (new Date() - startTime) / 60000;

    // Calculate the words per minute
    let wpm = wordCount / timeElapsed;

    // Update the h1 element
    document.getElementById("wpm").textContent = Math.round(wpm) + "wpm";
}, 1000);

document.getElementById("refresh").addEventListener("click", function () {
    location.reload();
});
let type_selector = false
document.getElementById("type_selector").addEventListener("click",function(){
    if(type_selector != true){
        document.getElementById("typeselectarea").style.display = "flex"
        document.getElementById("blur").style.display = "block"
        type_selector = true

    }
})
document.getElementById("closeselector").addEventListener("click",function(){
    if(type_selector == true){
        document.getElementById("typeselectarea").style.display = "none"
        document.getElementById("blur").style.display = "none"
        type_selector = false
    }
})