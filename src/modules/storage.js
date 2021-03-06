'use strict';

import uniqid from 'uniqid';
import sanitizeText from '../utils/sanitizeText.js';

const storage = (function() {
   let _todos = [];
   let _folders = [];
   let _defaultFolder = 'todos';

   const getFolders = function() {
      return [..._folders];
   };

   const addFolder = function(name) {
      let newFolderName = name;

      newFolderName = sanitizeText(String(newFolderName));

      if (newFolderName && !_folders.includes(newFolderName) && newFolderName !== _defaultFolder) {
         _folders.push(newFolderName);
      } else {
         throw new Error('Folder name is invalid');
      }
   };

   const removeFolder = function(name) {
      for (let i = 0; i < _todos.length; i++) {
         if (_todos[i].folder === name) _todos[i].folder = _defaultFolder;
      }

      _folders = _folders.filter(folder => folder !== name);
   };

   const getTodos = function() {
      let todosCopy = [];

      _todos.forEach(todo => todosCopy.push( Object.assign({}, todo) ));
      return todosCopy;
   };

   const addTodo = function(todoObj, folderName) {
      folderName = sanitizeText(String(folderName));

      if (todoObj instanceof Object && folderName) {
         todoObj.folder = (_folders.includes(folderName)) ? folderName : _defaultFolder;
         todoObj.id = uniqid();
         _todos.push(todoObj);
      }
   };

   const removeTodo = function(id) {
      _todos = _todos.filter(todo => todo.id !== id);
   };

   const editTodo = function(id, opt) {
      if (opt instanceof Object) {
         let { title, desc, reminder, priority, finished } = opt;
         let [ todo ] = _todos.filter(todo => todo.id === id);
   
         if (title) todo.title = sanitizeText(title);
         if (desc) todo.desc = sanitizeText(desc);
         if (reminder instanceof Date || reminder === null) todo.reminder = reminder;
         if (priority === 'low' || 
             priority === 'medium' || 
             priority === 'high') todo.priority = priority;
         if (finished !== undefined && (!!finished || !(!!finished))) todo.finished = !!finished;
      }
   };

   return {
      getFolders,
      addFolder,
      removeFolder,
      getTodos,
      addTodo,
      removeTodo,
      editTodo,
   };
})();

export default storage;