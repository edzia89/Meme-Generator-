const form = document.querySelector('#memeform');
const imageInput = document.querySelector('input[name="image"]');
const topTextInput = document.querySelector('input[name="toptext"]');
const bottomTextInput = document.querySelector('input[name="bottomtext"]');
const results = document.getElementById('results');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  console.log(imageInput.value)
  console.log(topTextInput.value)
  console.log(bottomTextInput.value)
  const newMeme = makeMeme(
    imageInput.value, 
    topTextInput.value, 
    bottomTextInput.value
  );
  results.appendChild(newMeme); // Log the values to the console
});

// function makeMeme(image, topText, bottomText) {
//   const meme = document.createElement('div');
//   meme.innerHTML = ?????
//   return meme;
// } 

