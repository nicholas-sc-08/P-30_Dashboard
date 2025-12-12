import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRound } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-1/4 h-1/3 flex-col items-center cursor-pointer">
        <CardHeader className="flex w-full h-15 justify-start items-center">
          <div className="flex justify-center items-center w-15 h-10 rounded">
            <UserRound />
          </div>
          <CardTitle className="w-100">Total Users</CardTitle>
        </CardHeader>
          <CardDescription className="w-70">
            This card provides an at-a-glance overview of the platform's user engagement and growth metrics. It is typically positioned as a key performance indicator (KPI) on the main dashboard view.
          </CardDescription>
      </Card>
    </div>
  );
}
