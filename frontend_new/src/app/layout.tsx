export const metadata = {
  title: 'Invictus - Career Learning Platform',
  description: 'Find your career path and start learning today',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
