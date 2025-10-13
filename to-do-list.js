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
