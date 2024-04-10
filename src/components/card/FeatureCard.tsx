'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

interface IFeatureCard {
  title: string;
  imgUrl: string;
}

const FeatureCard: React.FC<IFeatureCard> = ({ title, imgUrl }) => {
  const imageStyle = {
    backgroundImage: `url(${imgUrl})`,
  };
  return (
    <Card
      shadow={false}
      className="relative grid h-[12rem] w-full max-w-[16rem] items-center justify-center overflow-hidden text-center hover:opacity-70 transition-opacity duration-300 cursor-pointer"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center "
        style={imageStyle}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative md:px-12">
        <Typography
          variant="h2"
          color="white"
          className=" text-3xl leading-[1.5]"
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
