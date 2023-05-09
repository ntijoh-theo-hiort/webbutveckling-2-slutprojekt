document.addEventListener("DOMContentLoaded",function(){
    const queryclick = document.getElementById('QueryClick')
    queryclick.id = "Nothing";
    queryclick.addEventListener("click", function(){
      const textfield = document.getElementById("QueryResponse");
      textfield.style.display = "block";
      const str = "I'm sorry, but as an AI Language Model I am not able to answer questions regarding things that in any way relate to stuff.";
      const arr = str.split("");
      textfield.innerHTML += "Response: "
      for (let i = 0; i < arr.length; i++) {
        setTimeout(function() {textfield.innerHTML += arr[i];}, i * 40);
      }
      textfield.id = "Nothing"
    }
  )
})

