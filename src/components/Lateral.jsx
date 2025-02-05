import React from "react";
const Links = [
  "Inicio",
  "Inventario",
  "Ventas",
  "Compras",
  "Analíticas",
  "Proveedores",
];

const Lateral = () => {
  return (
    <div className="h-full row-span-3">
      <ul className="flex flex-col p-5 gap-4">
        {Links.map(link => {
          return (
            <li
              className="flex flex-row gap-2 hover:bg-indigo-100 p-3"
              key={link.id}
            >
              <img src="" alt="#" />
              <a className="hover:text-blue-700" href="#">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lateral;
