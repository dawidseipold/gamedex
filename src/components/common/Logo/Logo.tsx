import clsx from 'clsx';

// Components
import Link from 'next/link';

// Icons
import { IconDice4 } from '@tabler/icons';

interface IProps {
  size: 'small' | 'medium' | 'large';
}

const Logo = ({ size }: IProps) => {
  return (
    <Link href="/">
      <IconDice4
        size={clsx({ [24]: size === 'small', [32]: size === 'medium', [48]: size === 'large' })}
      />
    </Link>
  );
};

export default Logo;
