"use client";

import { useEffect } from "react";

interface ErrorProps{
    error:Error,
    reset:() => void
}

export default function Error({error: reset}:ErrorProps) {
  return (
    <div
      style={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>:c</h1>
      <p>a ocurrido un error</p>
    </div>
  );
}
