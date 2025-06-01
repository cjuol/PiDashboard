import { Card, CardContent, CardHeader, CardTitle } from "@shadcn/ui";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<Props> = ({ title, children }) => (
  <Card className="rounded-lg shadow-sm p-4">
    <CardHeader>
      <CardTitle className="text-sm text-gray-500">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);
