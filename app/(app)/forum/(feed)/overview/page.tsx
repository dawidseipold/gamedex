import { IconEye, IconHeart, IconMessage, IconThumbUp } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import Thread from '../components/Thread';

const Forum = () => {
  const threads = [
    {
      id: 1,
      title: 'Title of the article that is truncated',
      cover: { src: 'https://i.imgur.com/XkQhIGQ.jpeg', alt: 'some alt text' },
      categories: ['gaming', 'premiere'],
      user: {
        name: 'Balsee',
        image: { src: 'https://i.imgur.com/Z0kyiz4.jpeg', alt: 'some alt text' },
      },
      statistics: { views: 24442, likes: 1244, comments: 224 },
      date: '2022-12-24T13:33:03.969Z',
    },
  ];

  return (
    <ul className="flex w-full flex-col gap-y-4">
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} />
      ))}
    </ul>
  );
};

export default Forum;
