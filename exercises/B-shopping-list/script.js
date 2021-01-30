function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.querySelector('#content')
  let list = document.createElement('ul');
  shopping, forEach(function (shopping) {
    let li = document.createElement('li');
    li.textContext = shopping;
    list.appendChild(li);
  });


  let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

  shoppingList(shopping);
  console.log(list);

  content.appendChild(list);
}