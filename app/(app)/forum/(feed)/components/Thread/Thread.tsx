'use client';

import { IconEye, IconHeart, IconMessage } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

interface IThread {
  id: number;
  title: string;
  cover: { src: string; alt: string };
  categories: string[];
  user: {
    name: string;
    image: { src: string; alt: string };
  };
  statistics: { views: number; likes: number; comments: number };
  date: string;
}

interface IProps {
  thread: IThread;
}

const Thread = ({ thread }: IProps) => {
  const rtf = new Intl.RelativeTimeFormat('en', {
    style: 'short',
  });

  return (
    <li className="flex w-full gap-x-4 rounded-2xl bg-neutral-800 p-4 lg:max-h-40">
      <Link href={`/forum/thread/${thread.id}`} className="hidden lg:flex">
        <Image
          src={thread.cover.src}
          alt={thread.cover.alt}
          width={128}
          height={128}
          className="rounded-xl object-cover  lg:h-32 lg:min-h-[8rem] lg:w-32 lg:min-w-[8rem]"
        />
      </Link>
      <div className="flex w-full flex-col justify-between gap-y-4">
        <div className="flex w-full items-start justify-between gap-x-2">
          <div className="flex flex-col gap-y-2">
            <Link href={`/forum/thread/${thread.id}`}>
              <h3 className="text-xl font-semibold">{thread.title}</h3>
            </Link>

            <ul className="flex gap-x-2">
              {thread.categories.map((category) => (
                <li
                  key={category}
                  className="rounded-full bg-neutral-600 px-2 py-1 text-sm font-semibold tracking-wide text-neutral-400"
                >
                  <Link href="/forum/category/gaming">{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <IconHeart className="h-10 w-10 text-red-500 md:h-8 md:w-8 lg:h-6 lg:w-6" />
        </div>

        <div className="flex items-center justify-between gap-y-4">
          <Link href={`/profile/${thread.user.name}`} className="flex items-center gap-x-2">
            <Image
              src={thread.user.image.src}
              alt={thread.user.image.alt}
              width={64}
              height={64}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{thread.user.name}</span>
              <span className="text-sm text-neutral-500">{getRelativeTime(thread.date)}</span>
            </div>
          </Link>

          <ul className="flex flex-col items-center gap-x-4 gap-y-2 xs:flex-row">
            <li className="flex gap-x-1 text-neutral-500">
              <IconHeart />
              1244
            </li>

            <Link href={`/forum/thread/${thread.id}#comments`}>
              <li className="flex gap-x-1 text-neutral-500">
                <IconMessage />
                227
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </li>
  );

  function getRelativeTime(date: string) {
    const currentDate = new Date().getTime();
    const threadDate = new Date(date).getTime();

    const diff = currentDate - threadDate;

    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) return rtf.format(Math.round(-seconds), 'seconds');
    if (seconds < 3600) return rtf.format(Math.round(-seconds / 60), 'minutes');
    if (seconds < 86400) return rtf.format(Math.round(-seconds / 3600), 'hours');
    if (seconds < 604800) return rtf.format(Math.round(-seconds / 86400), 'days');
    if (seconds < 2620800) return rtf.format(Math.round(-seconds / 604800), 'weeks');
    if (seconds < 31449600) return rtf.format(Math.round(-seconds / 2620800), 'months');
    return rtf.format(Math.floor(-seconds / 31449600), 'years');
  }
};

export default Thread;
