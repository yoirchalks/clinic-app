import React, { useRef, useState } from "react";
import axios from "axios";

interface AvatarUploaderProps {
  existingImage?: string;
  uploadUrl: string;
  showLog?: boolean;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  existingImage,
  uploadUrl,
  showLog = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64WithPrefix = reader.result as string;
      const base64 = base64WithPrefix.split(",")[1];
      setPreviewImage(base64WithPrefix);

      try {
        const response = await axios.put(uploadUrl, { image: base64 });
        if (showLog) console.log("✅ Image uploaded:", response.data);
      } catch (error) {
        if (showLog) console.error("❌ Upload failed:", error);
      }
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const imageSrc =
    previewImage ||
    (existingImage
      ? `data:image/jpeg;base64,${existingImage}`
      : "/default-avatar.webp");

  return (
    <div className="absolute top-4 right-4">
      <img
        onClick={handleAvatarClick}
        className="w-16 h-16 rounded-full border border-gray-500 shadow cursor-pointer transition-opacity duration-200 hover:opacity-50"
        src={imageSrc}
        alt="Avatar"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default AvatarUploader;
