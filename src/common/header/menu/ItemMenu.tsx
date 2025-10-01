"use client";

type Props = { name: string; link?: string };

export const ItemLink = ({ name, link = "#" }: Props) => {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};

export const ItemLinkDropdown = ({ name, link = "#" }: Props) => {
  return (
    <li className="dropdown-item p-0">
      <a className="w-full block p-4" href={link}>{name}</a>
    </li>
  );
};