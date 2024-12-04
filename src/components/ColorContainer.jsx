const colors = ["#F2F9FF", "#B1F0F7", "#FADA7A", "#81BFDA"];
import { useContext } from "react";
import { GlobalContext } from "../context/GloblContext";

function ColorContainer() {
  const { changeColor } = useContext(GlobalContext);
  return (
    <div className="aline-element mb-6 flex justify-end">
      <ul className="flex gap-2">
        {colors.map((color) => {
          return (
            <li
              onClick={() => changeColor(color)}
              key={color}
              className="w-7 h-7 border rounded-full cursor-pointer hover:border-red-500"
              style={{ backgroundColor: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default ColorContainer;
