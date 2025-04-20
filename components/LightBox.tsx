// components/Lightbox.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./LightBox.css";

type LightboxProps = {
  src: string;
  alt?: string;
  caption?: string;
  onClose: () => void;
};

export function Lightbox({ src, caption, alt, onClose }: LightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-image">
        <Image
          src={src}
          width={1600}
          height={800}
          alt={alt || ""}
          className="lightbox-img"
        />
      </div>
      <button onClick={onClose} className="lightbox-close-button type-body">
        Close
      </button>
    </div>
  );
}
