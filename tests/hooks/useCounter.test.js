import { render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test on useCounter", () => {
  test("Should return default values" ,
    () => {
      const { result } = renderHook(() => useCounter());
      const { counter, decrease, increment, reset } = result.current

      expect(counter).toBe(10);
      expect( decrease).toEqual( expect.any(Function))
      expect( increment).toEqual( expect.any(Function))
      expect( reset).toEqual( expect.any(Function))
    
    
    })


    test("Should to has the counter with the value 100" ,
    () => {
      const { result } = renderHook(() => useCounter(100));
      const { counter, decrease, increment, reset } = result.current

      expect(counter).toBe(100);
     
    
    
    })
});
