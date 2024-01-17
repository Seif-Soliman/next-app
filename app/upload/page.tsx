"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicID, setPublicID] = useState("");
  return (
    <>
      {publicID && (
        <CldImage src={publicID} width={270} height={180} alt="Flowers" />
      )}
      <CldUploadWidget
        options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
        uploadPreset="awfo7ek7"
        onUpload={(result, widget) => {
          if (result.event !== "success") {
            return;
          } else {
            const info = result.info as CloudinaryResult;
            setPublicID(info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
