"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface Props {
  currentUrl: string;
  onUpload: (url: string) => void;
}

export default function ImageUploader({ currentUrl, onUpload }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(currentUrl);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError("");
    setUploading(true);

    try {
      const form = new FormData();
      form.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: form });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Upload failed");
      }

      const { url } = (await res.json()) as { url: string };
      setPreview(url);
      onUpload(url);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-blush/40 rounded-2xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-blush-primary transition-colors bg-white/50"
      >
        {uploading ? (
          <p className="font-sans text-sm text-charcoal/50">Uploading...</p>
        ) : (
          <>
            <span className="text-3xl">Image</span>
            <p className="font-sans text-sm text-charcoal/50 text-center">
              Drag and drop or <span className="text-blush-primary">click to upload</span>
            </p>
            <p className="font-sans text-xs text-charcoal/30">JPG, PNG, WebP - Max 4.5MB</p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleChange}
      />

      {error && <p className="font-sans text-xs text-red-500">{error}</p>}

      {preview && (
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-blush/20">
          <Image src={preview} alt="Product preview" fill className="object-cover" />
          <button
            type="button"
            onClick={() => {
              setPreview("");
              onUpload("");
            }}
            className="absolute top-1 right-1 w-5 h-5 bg-charcoal/60 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}
