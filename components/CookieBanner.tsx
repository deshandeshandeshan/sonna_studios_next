"use client";

import { useEffect, useState } from "react";
import "./CookieBanner.css";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="type-detail-regular">
        By continuing to browse our site you agree to our{" "}
        <Link href="/privacy-policy" className="text-grey cookies-policy">
          cookies policy.
        </Link>
      </p>
      <button
        className="type-detail-regular cookie-banner-button"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
}
