//Create a function named urlEncode that will receive a string of words, and return that string with all of the ////whitespace characters converted to % 20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

//Pseudocode
//create a new empty string
//
//for string.length check every character in the string
//if the character = to space then replace with %20 in a new string
//else print the character to the new string
//print new string
//loop again new string for last character to check everycharacter in the string
//if string.length -1 = %20 remove it

//removing any space encodement after string
//adding an if statement that checks itext[i].length - 1 || text[i].length + 1 are non space chars and arent over or under the length size

//https://gist.github.com/papoita/a3c0d084ee61f357c30e4a557a6df0bb

function urlEncode(text) {
  let encodedText = [];
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      encodedText = encodedText + "20%";
      //console.log("Am i doing this loop");

    } else {
      encodedText += text[i];
      //console.log("Am i doing this second loop");
    }

  } console.log(encodedText);
}






console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//replace and add to new string
function urlEncode(text) {
  let encodedText = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      encodedText.push("20%");
      console.log("Am i doing this loop");

    } else {
      encodedText.push(text[i]);
      console.log("Am i doing this second loop");
    }
    console.log(text[i]);
    console.log(encodedText);
  }
}





//first step find white space
function urlEncode(text) {
  //let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      text[i] = "20%";
      console.log("Am i doing this loop")
    }
    console.log(text[i]);
  }
}

//Full try

function urlEncode(text) {
  //let encodedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] = " ") {
      text[i] = "20%";
      encondedText.push(text[i])
      console.log(text[i]);
      console.log("white space replaced");
    } else {
      encondedText.push(text[i]);
      console.log(text[i]);
      console.log("pushing the same character");
    }
  }
  // Put your solution here
}



//Lighthouse % 20Labs
//Lighthouse % 20Labs
//blue % 20is % 20greener % 20than % 20purple % 20for% 20sure

