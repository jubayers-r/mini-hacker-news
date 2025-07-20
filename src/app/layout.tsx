import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/components/react-query-provider";
import { PageTransition } from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hacker News - The better one",
  description: "Built with Next.js 15, Shadcn, and TanStack Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReactQueryProvider>
            <PageTransition>{children}</PageTransition>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
