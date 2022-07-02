import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070F3',
  TextDecoder: 'underline',
};

type Props = {
  children?: React.ReactNode;
  text: string;
  href: string;
};

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
