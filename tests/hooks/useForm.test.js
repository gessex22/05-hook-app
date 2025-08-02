import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

const initialForm = {
  name: "eliot Anderson",
  mail: "eliotanderson2025@gmail.com",
};
describe("Test on useForm", () => {
  test("Should to return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      mail: initialForm.mail,
      formState: initialForm,
      onImputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("should to change the value of name", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onImputChange, formState } = result.current;

    act(() => {
      onImputChange({ target: { name: "name", value: "Anderson Eliot" } });
    });
    expect(result.current.formState.name).toEqual("Anderson Eliot");
  });

  test("should to reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onImputChange, onResetForm, formState } = result.current;

    act(() => {
      onImputChange({ target: { name: "name", value: "Anderson Eliot" } });
      onResetForm();
    });
    expect(result.current.formState).toEqual(initialForm);
  });
});
