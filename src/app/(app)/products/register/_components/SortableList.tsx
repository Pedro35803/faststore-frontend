"use client";

import { useEffect } from "react";
import Sortable from "sortablejs";
import {
  TbArrowRight,
  TbCircle,
  TbGripVertical,
  TbListDetails,
} from "react-icons/tb";

type Props = {
  listFields: string[];
  onChangeOrder: (newOrder: string[]) => void;
};

const getListOrder = (el: HTMLElement) => {
  return Array.from(el.querySelectorAll("li")).map(
    (li) => (li as HTMLLIElement).getAttribute("data-id") || ""
  );
};

export const SortableList = ({ listFields, onChangeOrder }: Props) => {
  useEffect(() => {
    const el = document.getElementById("list-example");
    const newOrder = getListOrder(el);
    onChangeOrder(newOrder);
    if (el) {
      Sortable.create(el, {
        animation: 150,
        onEnd: () => {
          const newOrder = getListOrder(el);
          onChangeOrder(newOrder);
        },
      });
    }
  }, []);

  const listLabel = ["Nome", "Preço", "Descrição", "Imagem"];

  return (
    <div className="flex gap-4 justify-between">
      <ul className="select-none border-base-content/25 divide-base-content/25 rounded-md max-w-sm divide-y w-1/2 border *:p-3.25 *:flex *:items-center *:gap-3 h-max">
        {listLabel.map((item) => (
          <li key={`label-${item}`}>
            <TbCircle className="size-4 shrink-0" />
            <p className="text-center w-full">{item}</p>
            <TbArrowRight className="text-base-content ms-auto size-4 shrink-0" />
          </li>
        ))}
      </ul>

      <ul
        id="list-example"
        className="select-none border-base-content/25 divide-base-content/25 rounded-md max-w-sm divide-y border *:cursor-move *:p-3 *:flex *:items-center *:gap-3"
      >
        {listFields.map((item, index) => (
          <li key={index} data-id={item}>
            <TbListDetails className="size-4 shrink-0" />
            <p className="text-center w-full">{item}</p>
            <TbGripVertical className="text-base-content ms-auto size-4 shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  );
};
