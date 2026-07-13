import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";

import "../globals.css";

export const metadata = {
  title: "Surf Hunters",
  description: "Surf Hunters"
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
  <html lang={locale}>
    <body className="relative bg-black text-white">

  <div
  className="fixed inset-0 z-0"
  style={{
    backgroundImage: "url('/images/wave-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.2
  }}
/>

  <div className="relative z-10">
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  </div>

</body>
  </html>
);
}