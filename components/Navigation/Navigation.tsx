import ghostClient from "@lib/ghost";
import { NavItem } from "./NavItem";

const Navigation = async () => {
  const { navigation: navItems } = await ghostClient.settings.browse();

  return (
    <div>
      <nav>
        {navItems?.map(({ url, label }) => (
          <NavItem key={url} label={label} url={url} />
        ))}
      </nav>
      <hr className="my-3" />
    </div>
  );
};

export default Navigation;
