'use strict';

const form = document.querySelector('form');

const submitHandler = (event) => {
  event.preventDefault();

  const favoriteBreed = form.favoriteBreed.value;

//border collie
  if (favoriteBreed === 'Border Collie') {
    form.output.value = "Border Collies were originally bred to herd sheep";    
    
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
    
    document.querySelector("body").classList.add('border-collie');

    document.querySelector('.image').src="images/border-collie.jpeg";

//pug
  } else if (favoriteBreed === 'Pug') {
    form.output.value = "Generally described as clowns, Pugs charm their humans with their playful sense of humor";
   
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
    
    document.querySelector("body").classList.add('pug');

    document.querySelector('.image').src="images/pug.jpeg";

//german shepherd
  } else if (favoriteBreed === 'German Shepherd') {
    form.output.value = "German Shepherds are famous for their intelligent, loyal, and hardworking natures";
   
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
   
    document.querySelector("body").classList.add('german-shepherd');

    document.querySelector('.image').src="images/german-shepherd.jpeg";

//terrier
  } else if (favoriteBreed === 'Terrier') {
    form.output.value = 'Terriers love life and are always up for a game or an adventure';
   
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
    
    document.querySelector("body").classList.add('terrier');
    
    document.querySelector('.image').src="images/terrier.jpeg";

//retriever
  } else if (favoriteBreed === 'Retriever') {
    form.output.value = "Retrievers were originally bred as gun dogs to retrieve shot waterfowl during hunting and shooting parties";
   
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
   
    document.querySelector("body").classList.add('retriever');

    document.querySelector('.image').src="images/retrievers.jpeg";

//corgi
  } else if (favoriteBreed === 'Corgi') {
    form.output.value = "The Corgi is known as one of the most agreeable of small house dogs and is a loyal, loving pet for families";
   
    document.querySelector("body").classList.remove('border-collie','pug', 'german-shepherd', 'terrier', 'retriever', 'corgi');
   
    document.querySelector("body").classList.add('corgi');

    document.querySelector('.image').src="images/corgi.jpeg";
  }
}

form.addEventListener('submit', submitHandler);


// TODO: Animation for pictures
console.log("TODO: add image animations, pet a dog.")