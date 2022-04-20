
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];
  Object.keys(dogs).forEach( (name) =>  {
    let a = document.createElement("a");
    a.innerHTML = name;
    a.href = dogs[name];
    let li = document.createElement('li');
    li.className.add('dog-link');
    li.appendChild(a);
    dogLinks.push(li);
  });
  return dogLinks;
};

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  dogLinks.forEach( (link) => {
    
  })
}
