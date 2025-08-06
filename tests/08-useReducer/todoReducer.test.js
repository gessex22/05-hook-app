import { todoReducer } from "../../src/08-useReducer/TodoReducer";

describe("Pruebas en ToDo reducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo de ToDo",
      done: false,
    },
  ];

  test("Should return the init state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add a ToDo", () => {
    const action = {
      type: "[add] add Todo",
      payload: { id: 2, description: " Nuevo todo #2", done: false },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test(" Should delete a ToDo", () => {
    const action = {
      type: "[rm] delete ToDo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test(" Should check a ToDo", () => {
    const action = {
      type: "[slc] select todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);
    
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
}); 
