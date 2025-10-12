const createToDoList = () => {
  const toDos = [];
  let id = 1;

  const publicAPI = {
    addToDo: (text) => {
      if (text) {
        const newToDo = { id: id, text: text };
        toDos.push(newToDo);
        id++;
        console.log(`Added "${text}" to the To Do List!`);
        return true;
      } else {
        console.log(`There was an error adding "${text}" to the To Do List...`);
        return false;
      }
    },

    deleteToDo: (id) => {
      const deleteIndex = toDos.findIndex((toDo) => toDo.id === id);
      if (deleteIndex !== -1) {
        const deleted = toDos.splice(deleteIndex, 1);
        console.log(`Deleted "${deleted[0].text}"!`);
        return true;
      } else {
        console.log(`Error deleting, id ${id} does not exist in the list...`);
        return false;
      }
    },

    printToDos: () => {
      console.log("\n--- TO-DO LIST ---");
      if (toDos.length !== 0) {
        toDos.forEach((toDo) => console.log(`${toDo.id}: ${toDo.text}`));
        console.log("------------------");
        return true;
      } else {
        console.log("There was an error or the list is empty!");
        return false;
      }
    },
  };

  return publicAPI;
};

myToDoList = createToDoList();
myToDoList.addToDo("Watch YouTube");
myToDoList.addToDo("Clean Dishes");
myToDoList.printToDos();
myToDoList.deleteToDo(1);
myToDoList.printToDos();

/*
Purity and Separation of Concerns: Your printToDos function currently has two responsibilities: it retrieves the to-do list and it logs it to the console. In a larger application, you might want to display this data in a web page, not just the console. How could you refactor this? What if you had one function, say getToDos(), whose only job was to return a copy of the toDos array? How does this make your module more reusable?

State Management and Immutability: Your methods currently mutate the internal toDos array directly using push and splice. While perfectly fine here, modern frameworks (like React) heavily favor immutability for more predictable state management.

Instead of toDos.push(newToDo), how could you create and return a new array that contains all the old items plus the new one? (Hint: investigate the spread syntax ...).

Instead of using splice to remove an item, how could you use a non-mutating array method like .filter() to return a new array containing all elements except the one to be deleted?

Global Scope Pollution: Look at the line myToDoList = createToDoList();. What keyword is missing? What is the consequence of omitting it in a browser environment when not in strict mode? This is a subtle but critical point in professional code.

Error/State Reporting: In printToDos, your message "There was an error or the list is empty!" is ambiguous. An empty list is a valid state, not an error. How could you provide a more precise output for the empty case?