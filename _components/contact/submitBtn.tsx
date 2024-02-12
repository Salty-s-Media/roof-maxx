"use client";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn" disabled={pending}>
      {pending ? "Sending..." : "Contact Us"}
    </button>
  );
}
