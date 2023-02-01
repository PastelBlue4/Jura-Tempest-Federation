import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head title="Romuru Tech Blog" />
      {children}
    </html>
  );
}
