import ShowcaseBanner from "@/components/ShowcaseBanner";

export default function HandverkerLayout({
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
