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
    <li className="dropdown-item">
      <a href={link}>{name}</a>
    </li>
  );
};