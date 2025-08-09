import {
  fireEvent,
  getAllByRole,
  render,
  screen,
} from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/components/TodoItem";

describe("Tests on ToDo item", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test(" Should show pendent ToDo to accomplish ", () => {
    render(
      <ToDoItem
        NewItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test(" it Should show the  completed ToDo ", () => {
    todo.done = true;

    render(
      <ToDoItem
        NewItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Span should call toggelTodo when its called", () => {
    render(
      <ToDoItem
        NewItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    fireEvent.click(screen.getByLabelText("span"));
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("Span should call onDeleteTodo when its clicked", () => {
    render(
      <ToDoItem
        NewItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button");

    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
 