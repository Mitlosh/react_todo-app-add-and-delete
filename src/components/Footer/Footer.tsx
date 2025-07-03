import cn from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  status: 'all' | 'active' | 'completed';
  onStatusChange: (status: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
};

export const Footer: React.FC<Props> = ({
  todos,
  status,
  onStatusChange,
  onClearCompleted,
  hasCompleted,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${todos.filter(todo => !todo.completed).length} items left`}
      </span>
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={cn('filter__link', { selected: status === 'all' })}
          data-cy="FilterLinkAll"
          onClick={() => onStatusChange('all')}
        >
          All
        </a>

        <a
          href="#/active"
          className={cn('filter__link', { selected: status === 'active' })}
          data-cy="FilterLinkActive"
          onClick={() => onStatusChange('active')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={cn('filter__link', { selected: status === 'completed' })}
          data-cy="FilterLinkCompleted"
          onClick={() => onStatusChange('completed')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={onClearCompleted}
        disabled={!hasCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
