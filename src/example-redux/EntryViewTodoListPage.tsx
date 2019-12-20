import React from 'react';
import { Provider } from 'react-redux';
import ViewTodoListPage from '../example-simple/ViewTodoListPage';
import { StoreTodoListPage } from './ViewModelTodoListPage';

export default function EntryViewTodoListPage() {
  return (
    <Provider store={StoreTodoListPage}>
      <ViewTodoListPage />
    </Provider>
  );
}
