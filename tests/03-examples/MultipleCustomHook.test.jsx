import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomhook";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
const incrementMock = jest.fn();

useCounter.mockReturnValue({
  counter: 1,
  increment: incrementMock,
  decrease: jest.fn(),
});

describe("Pruebas en MulktipleCustomHook", () => {
  test(" Should to show the default component ", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHook />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Pokemon Info"));

    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Should to show a quote", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Pikachu",
        id: "4",
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    expect(screen.getByText("#4 - Pikachu"));

    screen.debug();
  });

  test("Should call the increase function ", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Pikachu",
        id: "4",
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);

    expect(incrementMock).toHaveBeenCalled();
  });
});
