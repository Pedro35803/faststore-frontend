"use client";

import { useAuth } from "@/common/authContext";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import { UserRoleBadge } from "./userRoleBadge";
import { User } from "@/types/user";

export const ImgPerfil = () => {
  const [imageSrc, setImageSrc] = useState<string>();
  const { setValues } = useFormikContext();
  const { user } = useAuth();

  useEffect(() => {
    setImageSrc(user?.picture);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const listFiles = event.target.files as FileList;
    const fileSelect = listFiles[0];
    setValues("picture", fileSelect as any);
    convert2base64(fileSelect);
  };

  const convert2base64 = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result?.toString());
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <label>
        <input
          type="file"
          name="picture"
          className="h-0 w-0 opacity-0"
          onChange={handleFileChange}
        />
        <img
          src={imageSrc}
          alt={user?.name}
          className="rounded-full w-24 aspect-square bg-black/10 cursor-pointer"
        />
      </label>
      <UserRoleBadge role={user?.role as User["role"]} />
    </div>
  );
};
