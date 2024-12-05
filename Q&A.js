// Select the button and textarea elements
const submitBtn = document.getElementById('submit-btn');
const questionBox = document.getElementById('question-box');

// Add an event listener to handle form submission
submitBtn.addEventListener('click', () => {
    const question = questionBox.value.trim();
    
    if (question) {
        alert(`Thank you for your question: "${question}"`);
        questionBox.value = ''; // Clear the textarea
    } else {
        alert('Please enter a question before submitting.');
    }
});
