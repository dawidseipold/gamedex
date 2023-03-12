'use client';

// Components
import Link from 'next/link';
import Logo from '../../../src/components/common/Logo';
import User from './User';

// Icons
import { IconHelp, IconInbox, IconSearch } from '@tabler/icons';

// Styles
import * as styles from './Header.styles';

import { motion } from 'framer-motion';

const Header = () => {
  const logged = true;

  return (
    <motion.header
      initial={{ y: 'calc(-100% - 2rem)' }}
      animate={{
        y: 0,
      }}
      className={styles.base}
    >
      <div className="flex h-full w-full items-center justify-between rounded-2xl bg-neutral-800/75 px-4 drop-shadow-lg backdrop-blur-md">
        <Logo size="large" />
        {/* Links navigation - TODO: Componentize */}
        {logged && (
          <nav className="absolute inset-x-1/2 hidden w-max -translate-x-1/2 items-center gap-x-8 md:flex">
            <Link href="/">Home</Link>
            {/* TODO: Dropdown with other categories. */}
            <Link href="/user/username">Profile</Link>
            <Link href="/browse">Browse</Link>
            <Link href="/forum/overview">Forum</Link>
          </nav>
        )}
        {/* Dropdown/Dialog navigation */}
        {logged ? (
          <nav className="flex items-center gap-x-4">
            <IconSearch />
            <IconInbox />
            {/* In user there are gonna be links to Profile, Settings, Help, Dontaions, as well as functions like Loggin Out */}
            <User />
            {/* On lower resolution Links Navigation is moved into user dropdown */}
            {/* <IconHelp /> */}
          </nav>
        ) : (
          <div className="flex items-center gap-x-4">
            <Link href="/login" className="font-semibold tracking-wide">
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-red-500 px-4 py-2 font-semibold tracking-wide"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
