function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (var i = 0; i < arrayOfPeople.length; i++) {
    const list = document.createElement('li');
    const listText = document.createTextNode(
      '$(arrayOfPeople[i].name)-${arrayOfPeople[i].job}'
    );
    list.appendChild(listText);
    document.body.appendChild(list);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
