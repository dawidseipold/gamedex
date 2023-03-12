import { Icon24Hours, IconArrowRight, IconMenu, IconMenu2, IconPlus } from '@tabler/icons';
import Link from 'next/link';
import Button from '../../../../src/components/common/Button';

interface IProps {
  children: React.ReactNode;
}

const ForumFeedLayout = ({ children }: IProps) => {
  return (
    <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row">
      <nav className="sticky top-24 flex h-16 w-full items-center justify-end gap-x-2 gap-y-4 rounded-2xl bg-neutral-800/75 px-4 drop-shadow-lg backdrop-blur-md md:h-max md:w-64 md:min-w-[16rem] md:flex-col md:items-start md:justify-start md:py-4 lg:w-80 lg:min-w-[20rem]">
        <Button className="mr-auto !p-1 2xs:!px-4 2xs:!py-2 md:mr-0 md:w-full">
          <span className="hidden 2xs:flex">Create Thread</span>

          <IconPlus className="flex h-8 w-8 min-w-[2rem] 2xs:hidden" />
        </Button>

        <ul className="hidden gap-y-2 gap-x-1 rounded-2xl  md:flex md:w-full md:flex-col">
          <h3 className="hidden text-xl font-bold md:flex">Sort</h3>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className=" flex flex-col">
              <h4 className="text-lg font-semibold">Newest</h4>
              <span className="text-neutral-500 ">View the latest posts</span>
            </div>
          </li>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className=" flex flex-col">
              <h4 className="text-lg font-semibold">Trending</h4>
              <span className="text-neutral-500">View most popular</span>
            </div>
          </li>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className=" flex flex-col">
              <h4 className="text-lg font-semibold">Following</h4>
              <span className="text-neutral-500">View followed people</span>
            </div>
          </li>
        </ul>

        <ul className="hidden flex-col gap-y-2 rounded-2xl md:flex md:w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Categories</h3>
            <Link href="/forum/categories" className="self-end hover:underline">
              See all
            </Link>
          </div>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">#discussion</h4>
              <span className="text-neutral-500">2114 posts</span>
            </div>
          </li>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">#premiere</h4>
              <span className="text-neutral-500">1256 posts</span>
            </div>
          </li>

          <li className="flex items-center gap-x-4 rounded-xl p-2 hover:bg-neutral-700">
            <Icon24Hours className="h-8 w-8 min-w-[2rem]" />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">#gaming</h4>
              <span className="text-neutral-500">956 posts</span>
            </div>
          </li>
        </ul>

        <div className="flex items-center gap-x-4 rounded-xl p-1 hover:bg-neutral-700">
          <IconMenu2 className="h-8 w-8 min-w-[2rem] md:hidden" />
        </div>
      </nav>

      {children}
    </div>
  );
};

export default ForumFeedLayout;
