'use client';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface IHorizontalCardProps {
  imageUrl: StaticImageData;
  title: string;
  description: string;
  btnTitle?: string;
  href: string;
}

const HorizontalCard: React.FC<IHorizontalCardProps> = ({
  imageUrl,
  title,
  description,
  btnTitle,
  href
}) => {
  return (
    <Card className="w-full max-w-[48rem] flex-col m-5 sm:flex-row sm:mb-10 sm:my-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <Image src={imageUrl} alt="" fill />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {description}
        </Typography>
        <Link href={href} className="inline-block">
        <Button variant="text" className="flex items-center gap-2">
            {btnTitle ? btnTitle : 'Learn More'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;
