var words = {
    noun1:"",
    word2:"",
    word3:"",
    word4:"",
    word5:"",
 
}

function myfunction() {
        words.noun1 = prompt("Enter a Boy's Name");
        words.word2 = prompt("Enter an Adjective");
        words.word3 = prompt("Enter a Body Part");
        words.word4 = prompt("Enter an Insect");
        words.word5 = prompt("Enter a Verb ending in S");
          
    if (words.noun1 != null) {
        document.getElementById("madlib").innerHTML = 
            "Im in love with" + '&nbsp;' + words.noun1 + '&nbsp;' + ". He's so" + '&nbsp;' + words.word2 + '&nbsp;' +"! He has a big, flat" + '&nbsp;' + words.word3 + '&nbsp;' + ", and when we meet I get" + '&nbsp;' + words.word4 + '&nbsp;' + "in my stomach. Ive fallen for him like a ton of" + '&nbsp;' + words.word5 + '&nbsp;' + ", and he shuffles for me too. But I think he's got another girlfriend. What do I do?";;     
    }
    
}


