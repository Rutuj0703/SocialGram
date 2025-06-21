"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      className="ut-upload-dropzone w-full max-w-sm mx-auto rounded-md border border-white/10 bg-zinc-900"
    appearance={{
      button: "bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded shadow",
      label: "text-sm text-white mb-2",
      uploadIcon: "h-8 w-8 text-white mx-auto mb-2",
      allowedContent: "text-xs text-gray-400",
      container: "flex flex-col items-center p-6 space-y-2",
    }}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
export default ImageUpload;