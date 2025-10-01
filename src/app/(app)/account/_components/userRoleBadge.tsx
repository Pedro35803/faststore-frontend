import { User } from "@/types/user";

type Props = Pick<User, "role">;

export function UserRoleBadge({ role }: Props) {
  const displayTexts: Record<User["role"], string> = {
    CLIENT: "Cliente",
    SELLER: "Vendedor",
  };

  return (
    <div className="border border-solid border-primary rounded-full py-0.5 px-2 text-primary font-medium">
      {displayTexts[role]}
    </div>
  );
}
