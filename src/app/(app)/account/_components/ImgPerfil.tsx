"use client";

import { useEffect, useState } from "react";

export const ImgPerfil = () => {
  const [imageSrc, setImageSrc] = useState();
  const { user } = useAuth();

  useEffect(() => {
    setImageSrc(user?.picture);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const listFiles = event.target.files as FileList;
    const fileSelect = listFiles[0];
    setValue("picture", fileSelect);
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
    <div className="gap-2 items-center">
      <label {...register("picture")}>
        <input
          type="file"
          className="h-0 w-0 opacity-0"
          onChange={handleFileChange}
        />
        <img
          src={imageSrc}
          alt={user.name}
          className="rounded-full w-24 aspect-square bg-black/10 cursor-pointer"
        />
      </label>
      <UserRoleBadge role={user.role} />
    </div>
  );
};
