const navLink: any = [
  { id: "01", display: "Category", path: "/category" },
  { id: "01", display: "Daily Deals", path: "/daily-deals" },
  { id: "01", display: "Gift With boAt", path: "/gift-with-boat" },
  { id: "01", display: "Bulk Orders", path: "/bulk-orders" },
  { id: "01", display: "More", path: "/more" },
];

const Navbar = () => {
  return (
    <ul className="flex gap-4 items-center">
      {navLink.map((item: any) => (
        <li key={item.id}>{item.display}</li>
      ))}
    </ul>
  );
};

export default Navbar;
