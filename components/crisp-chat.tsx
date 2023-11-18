"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("efc77ca7-509a-4fe8-8ebc-1a20d32b7802")
  }, []);

  return null;
}