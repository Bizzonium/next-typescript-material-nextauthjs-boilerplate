import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import Link from "../components/Link";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">JAM Stack{!session && loading ? " (auth loading)" : "" }</Typography>
        {!session && (
          <Link
            href="/api/auth/signin"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Link>
        )}
        {session?.user && (
          <Link
            href="/api/auth/signout"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Link>
        )}
        <Link href="/" color="secondary">Home</Link>
        <Link href="/client" color="secondary">Client</Link>
        <Link href="/server" color="secondary">Server</Link>
        <Link href="/protected" color="secondary">Protected</Link>
        <Link href="/api-example" color="secondary">API</Link>
      </Toolbar>
    </AppBar>
  );
}
