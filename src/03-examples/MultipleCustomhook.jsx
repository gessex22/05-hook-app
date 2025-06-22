import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PockemonCard } from "./PockemonCard";

export const MultipleCustomHook = () => {
  const { counter, increment, decrease } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <div>Pokemon Info</div>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PockemonCard
          info={data}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      <h2> {data?.name}</h2>

      <button
        onClick={() => (counter > 1 ? decrease() : null)}
        className="btn btn-primary"
      >
        Previus
      </button>

      <button onClick={() => increment()} className="btn btn-primary">
        Next
      </button>
    </>
  );
};
