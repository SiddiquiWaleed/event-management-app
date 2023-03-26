import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
    	<Link href="/">Event Management App</Link>
      <ul>
        <li>
        	<Link href="/events">
          	Events
          </Link>
        </li>
        <li>
        	<Link href="/">
          	Featured Events
        	</Link>
        </li>
        <li>
        	<Link href="/">
          	Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;