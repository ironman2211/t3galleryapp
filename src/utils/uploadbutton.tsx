"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/utils/uploadthing";

const Uploadbutton = () => {
  const router = useRouter();
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        router.refresh();
        console.log("onClientUploadComplete");
      }}
    />
  );
};

export default Uploadbutton;
