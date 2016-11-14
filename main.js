/**
 * Created by bo on 11/14/16.
 */
"use strict";

import todos from "./typeScriptDemo.ts";

let todo = "";
for(let i=0; i < todos.length; i++) {
    todo += "<p>";
    todo += "todo: " +todos[i].todo+ ", importance: " +todos[i].importance;
    todo += "</p>";
    //alert(todos[i].todo);
}
    document.getElementById("todos").innerHTML= `Todos: ${todo}`;
