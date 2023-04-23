import React, { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "../services/firebase";

const Documents = () => {
  const [file, setFile] = useState("");
  const [document, setDocument] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !document) return;

    await toast.promise(
      new Promise(async (resolve, reject) => {
        await uploadFile(file, document)
          .then(async (fileUrl) => {
            console.log("file uploaded" ,fileUrl)
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "uploading...",
        success: "proposal uploaded successfully",
        error: "encountered error",
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">File:</label>
        <input
          name="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border border-black"
        />
        <br />
        <br />
        <label htmlFor="document">document:</label>
        <input
          name="document"
          type={document}
          className="border border-black"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        />
        <button
          type="submit"
          className="flex flex-row justify-center items-center
              w-full text-white text-md py-2 px-5 rounded-full
              drop-shadow-xl hover:bg-transparent hover:text-[#ffffff]
              focus:outline-none focus:ring mt-5 bg-[#5C067F] text-md font-bold
              hover:bg-[#E77FBD]"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Documents;
