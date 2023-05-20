document.getElementById("addBtn").addEventListener("click", function() {

    var todoInput = document.getElementById("todoInput");
  
    var todoList = document.getElementById("todoList");
  
    
  
    var todoText = todoInput.value;
  
    if (todoText.trim() !== "") {
  
      var listItem = document.createElement("li");
  
      var checkBox = document.createElement("input");
  
      checkBox.type = "checkbox";
  
      listItem.appendChild(checkBox);
  
      listItem.appendChild(document.createTextNode(todoText));
  
      todoList.appendChild(listItem);
  
      todoInput.value = "";
  
      checkBox.addEventListener("change", function() {
  
        if (this.checked) {
  
          var completedList = document.getElementById("CompletedList");
  
          listItem.removeChild(checkBox);
  
          completedList.appendChild(listItem);
  
        } else {
  
          listItem.removeChild(checkBox);
  
          todoList.appendChild(listItem);
  
        }
  
      });
  
      
  
      listItem.addEventListener("dblclick", function() {
  
        var NewText = prompt("Edit the task", listItem.textContent);
  
        if (NewText !== NULL && NewText.trim() !== "") {
  
          listItem.textContent = NewText;
  
        }
  
      });
  
    }
  
  });
  
  document.getElementById("CompletedList").addEventListener("click", function(e) {
  
    if (e.target.tagName === "LI") {
  
      e.target.remove();
  
    }
  
  });
  