import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const FeatureCard = ({ title, description, imageSrc, width = 1000, height = 100 }) => (
  <Card>
    <CardHeader className="text-left rtl:text-right">
      <CardTitle className="text-l md:text-xl text-semibold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Image src={imageSrc} alt={`${title} preview`} width={width} height={height} priority />
    </CardContent>
  </Card>
);