import { Badge } from "./ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const StepCard = ({ step, title, description }) => (
  <Card>
    <CardHeader className="text-left rtl:text-right">
      <Badge className="text-primary bg-primary/30 text-2xl px-3">{step}</Badge>
      <CardTitle className="text-l">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);