import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Simon Wand",
  description: "Developer portfolio",
};

const themeInitScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('theme-preference');
    var resolvedTheme = storedTheme;
    if (!resolvedTheme) {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolvedTheme);
    document.documentElement.dataset.theme = resolvedTheme;

    var localeFromPath = window.location.pathname.split('/')[1];
    if (localeFromPath === 'de' || localeFromPath === 'en') {
      document.documentElement.lang = localeFromPath;
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[var(--bg)] font-sans text-[var(--text-primary)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
