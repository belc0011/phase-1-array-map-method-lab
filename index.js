const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  for (let i = 0; i<tutorials.length; i++) {
    tutorials[i] = tutorials[i].charAt(0).toUpperCase() + tutorials[i].slice(1);
  }
  const newArray = tutorials.map(title => {
   const arrayOfWords = []
    for (let j = 0; j < title.length; j++) {
      debugger
      if (title.charAt(j) === ' ') {
        debugger
        let captureFirstPart = title.slice(0,j);
        let titleFragment = title.slice(j+1)
        let capitalizeFirstLetter = titleFragment.charAt(0).toUpperCase();
        let newTitleFragment = capitalizeFirstLetter + titleFragment.slice(1);
        title = captureFirstPart + " " + newTitleFragment;
        debugger
      }
    }
    return title;
    debugger
  })
  return newArray;
  debugger
}
console.log(titleCased());
