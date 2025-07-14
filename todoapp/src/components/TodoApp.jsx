import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../features/TodoSlice';


const TodoApp = () => {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, newText }));
    setEditingId(null);
    setNewText('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Todo List</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: 10 }}>
            {editingId === todo.id ? (
              <>
                <input
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>Update</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
