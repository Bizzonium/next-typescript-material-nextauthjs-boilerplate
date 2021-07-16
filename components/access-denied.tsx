import { signIn } from 'next-auth/client'
import React from 'react';
import Link from './Link';

export default function AccessDenied () {
  return (
    <>
      <h1>Access Denied</h1>
      <p>
        <Link
            href="/api/auth/signin"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            You must be signed in to view this page
          </Link>
      </p>
    </>
  )
}
