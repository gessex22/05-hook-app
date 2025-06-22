import React from "react";

export const PockemonCard = ({
  info: {
    name,
    id,
  },
  sprites = [],
}) => {
  // const { name, id } =
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        {" "}
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
