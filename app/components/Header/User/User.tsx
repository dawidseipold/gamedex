'use client';

import { IconChevronDown } from '@tabler/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useMediaQuery } from 'usehooks-ts';

const User = () => {
  return (
    <div className="flex items-center gap-x-1 rounded-md p-1">
      <Image
        src="https://i.imgur.com/GhGhZyZ.jpeg"
        width={64}
        height={64}
        alt="alt"
        className="h-8 w-8 rounded-full object-cover"
        priority
      />

      <IconChevronDown size={20} className="hidden md:block" />
    </div>
  );
};

export default User;
