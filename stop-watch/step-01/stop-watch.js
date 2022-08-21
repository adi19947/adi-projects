console.log('hello');

const stopWatchView = document.querySelector('#stop-watch-view');
console.log(stopWatchView);

const pTag = document.querySelector(' p');
console.log(pTag);
const className = document.querySelector(' .my-class');
console.log('class', className);

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);


const listItems = document.querySelectorAll(' .list-item');
console.log(listItems);
let counter = 1;
listItems.forEach(function (listItem) {
    console.log('list item', listItem);
    listItem.innerHTML = counter++;
});

