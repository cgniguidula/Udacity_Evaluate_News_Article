function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    
    //Validate text
    if (!formText || formText == ''){
        updatePage({error: "Please enter a value."});
        return;
    } 
    if (!Client.isEnglish(formText)){
        updatePage({error: "Please enter text with English characters, digits, and punctuation symbols only."});
        return;
    }

    //If text is valid, clean, get results, and display to user
    const cleanedText = formText.replace(/\s/g, ' ');

    postData('http://localhost:8081/submitForm', {userInput: cleanedText})
    .then(function(data){      
        const results = data.results;
        const displayData = {
            text: formText,
            agreement: results.agreement,
            confidence: results.confidence,
            irony: results.irony,
            subjectivity: results.subjectivity
        }
        updatePage(displayData);
    })
}


//Displays form/error results to the end user
const updatePage = function (data){
    results.innerHTML = JSON.stringify(data);
}

//Sends user input to the server to use the API for analysis
const postData = async function(url = '', data = {}){
    const response = await fetch('http://localhost:8081/submitForm', {
        method: 'POST',
        credentials: "same-origin",
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    try{
        const data = await response.json();
        return data;
    } catch(error){
        console.log("There was an error: " + error);
    }
}

export { handleSubmit }
