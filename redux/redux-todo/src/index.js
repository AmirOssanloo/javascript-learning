import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

let nextTodoId = 0;

// Reducer (Handles individual todo)
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

// Reducer (Handles all todos)
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
    return state;
  }
}

// Visibility filter reduxer
const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// Action creators
// ============================
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

// React UI
// ============================
const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: (completed
        ? 'line-through'
        : 'none')
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          dispatch(addTodo(input.value))
          input.value = '';
        }}>
          Add Todo
        </button>
    </div>
  )
}
AddTodo = connect()(AddTodo);

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: 
      ownProps.filter ===
      state.visibilityFilter
  }
}

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
}

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

const Footer = () => {
  return (
    <div>
      Show:
      <br />
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      <br />
      <FilterLink filter='SHOW_ACTIVE'>
        ACTIVE
      </FilterLink>
      <br />
      <FilterLink filter='SHOW_COMPLETED'>
        COMPLETED
      </FilterLink>
    </div>
  )
}

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
}

// Visible Todo List
// ============================
const mapStateToTodoListProps = state => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToTodoListProps = dispatch => {
  return {
    onTodoClick: id => {
      store.dispatch(toggleTodo(id))
    }
  };
};

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

// Main app component
// ============================
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

// Root state combines the state from several reducers
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// Create our Redux store
const store = createStore(todoApp);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('root')
  
);

// Test for adding a new todo
const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Testing Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Testing Redux',
      completed: false
    }
  ];

  // Freeze state to prevent mutation
  deepFreeze(stateBefore);
  deepFreeze(action);

  // Test case
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Testing Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn Redux',
      completed: false
    }
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Testing Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Learn Redux',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('All tests passed.');