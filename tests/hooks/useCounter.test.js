import { render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";

describe("Test on useCounter", () => {
  test("Should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrease, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrease).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Should to has the counter with the value 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrease, increment, reset } = result.current;

    expect(counter).toBe(100);
  });

  test("should to increase counter ", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2)
    });

    expect(result.current.counter).toBe(13 );
  });

   test("should to DECREASE THE counter ", () => {
    const { result } = renderHook(() => useCounter());
    const { decrease } = result.current;

    act(() => {
      decrease();
      decrease(2)
    });

    expect(result.current.counter).toBe(7 );
  });

   test("should to reset THE counter ", () => {
    const { result } = renderHook(() => useCounter());
    const { reset,increment, counter } = result.current;

    act(() => {
    increment(20)
    reset()
    });

    expect(result.current.counter).toBe(counter);
  });



});
