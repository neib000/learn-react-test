// import TodoList from 'features/Todo/components/TodoList';
// import TodoList from '../../components/TodoList';
import TodoList from 'features/Todo/components/TodoList';
import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm';
// import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');
  const handleTodoClick = (todo, idx) => {
    // clone current array to the new one
    const newTodoList = [...todoList];
    // toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    console.log(todo, idx);
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };
  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status
  );
  const handleTodoFormSubmit = (value) => {
    console.log('form control' + value);
    const newTodo = {
      id: todoList.length,
      title: value.title,
      status: 'New',
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo list</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
