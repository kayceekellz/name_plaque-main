
const buyNow = () => {
    var inputText = document.getElementById("guessField").value;
  
    if (inputText === "") {
      alert("Please enter your name");
  
      return;
    }
  
    //check that user inpput is not the default text
    if (inputText === "Your name") {
      alert("Please enter a valid name");
  
      return;
    }
  
    //user input should not be more than 15 characters
    if (inputText.length > 15) {
      alert("Too many characters in name field");
      return;
    }
  
    alert("Thank you for your order " + inputText);
  };
  
  const getInput = () => {
    //Get value on input text
    var inputText = document.getElementById("guessField").value;
  
    //set input preview on the plaque
    document.getElementsByClassName("plaque-prev")[0].textContent = inputText;
    //calculate the price base on the length of the input
    document.getElementById("plaquePrice").innerHTML = "$" + 5 * inputText.length;
  };