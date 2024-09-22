export default function Page() {
  let links = [
    { name: "about", href: "/about" },
    { name: "contacts", href: "/contacts" },
    { name: "crowd_funding", href: "/crowd" },
    { name: "gallery", href: "/gallery" },
    { name: "partners", href: "/partner" },
    { name: "sponsors", href: "/sponsors" },
    { name: "team-intro", href: "/team-intro" },
  ];
  return (
    <>
      <div className="flex justify-center h-screen items-center text-2xl">
        <p>This is the home page</p>
      </div>
    </>
  );
}
