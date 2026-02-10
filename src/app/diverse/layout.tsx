import ShowcaseBanner from "@/components/ShowcaseBanner";

export default function DiverseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShowcaseBanner />
      {children}
    </>
  );
}
