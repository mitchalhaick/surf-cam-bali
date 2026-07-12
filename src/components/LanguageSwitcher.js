"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isRu = pathname.startsWith("/ru");

  const newPath = isRu
    ? pathname.replace(/^\/ru/, "/en")
    : pathname.replace(/^\/en/, "/ru");

  return (
    <Link href={newPath}>
      {isRu ? "EN" : "RU"}
    </Link>
  );
}