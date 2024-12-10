import { useState, useRef } from "react";
import { Camera, Upload } from "lucide-react";

export default function ProfileUpload() {
  const [profileImage, setProfileImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const fileInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const handleImageUpload = (event, setter) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <div className="mb-6">
        <div
          className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              fileInputRef.current?.click();
            }
          }}
          aria-label="Upload profile picture"
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <Camera className="w-12 h-12 text-gray-400" aria-hidden="true" />
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => handleImageUpload(e, setProfileImage)}
          accept="image/*"
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer"
          onClick={() => logoInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              logoInputRef.current?.click();
            }
          }}
          aria-label="Upload logo"
        >
          {logo ? (
            <img src={logo} alt="Logo" className="max-w-full max-h-16" />
          ) : (
            <span className="text-gray-500 font-semibold">LOGO</span>
          )}
          <input
            type="file"
            ref={logoInputRef}
            className="hidden"
            onChange={(e) => handleImageUpload(e, setLogo)}
            accept="image/*"
            aria-hidden="true"
          />
        </div>

        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => documentInputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              documentInputRef.current?.click();
            }
          }}
          aria-label="Upload document"
        >
          <Upload className="w-6 h-6 text-purple-600 mb-2" aria-hidden="true" />
          <span className="text-purple-600 font-semibold text-sm">
            SUBIR DOCUMENTO
          </span>
          <input
            type="file"
            ref={documentInputRef}
            className="hidden"
            accept=".pdf,.doc,.docx"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
