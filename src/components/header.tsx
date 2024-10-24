import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
} from "@nextui-org/react";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session.user.image || ""} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button color="secondary" type="submit" variant="bordered">
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" type="submit" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Reddit Mini
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}
