import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui";
import React from "react";

interface Props {
  title: string;
  value: string | number;
}

export const InfoCard: React.FC<Props> = ({ title, value }) => (
  <Card className="rounded-lg shadow-sm p-4">
    <CardHeader>
      <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-semibold">{value}</p>
    </CardContent>
  </Card>
);
