import React, { useLayoutEffect, useRef } from "react";
import { useState } from "react";

export const PockemonCard = ({ info: { name, id }, sprites = [] }) => {
  const h2ref = useRef();
  const [boxsize, setBoxsize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = h2ref.current.getBoundingClientRect();
    setBoxsize({ height, width });
  }, []);

  // const { name, id } =
  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2ref} className="text-capitalize">
        {" "}
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>

      <div className="div">{JSON.stringify(boxsize, 2, null)}</div>
    </section>
  );
};
