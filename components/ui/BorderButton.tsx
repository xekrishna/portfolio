"use client";
import { Button } from "../ui/moving-border";

export function MovingBorderButton({
  title,
  icon,
}: {
  title?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <Button
        borderRadius="10px"
        className="text-white bg-neutral-900 border-[#e979ff44] flex justify-start px-2 gap-2 font-poppins hover:bg-[#4e4e4e]"
      >
        <div className="p-1 text-lg rounded-md bg-neutral-700 ">{icon}</div>
        {title}
      </Button>
    </div>
  );
}
