import { columns, Payment } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/data-table"
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

export default async function page() {
    const data = await getData()

    return (
        <div className="w-screen h-screen flex items-center justify-center container mx-auto py-10">
            <Card className="w-300 h-150 p-5 ">
                <CardHeader className="w-full bg-secondary flex justify-between items-center h-20">
                    <div className="w-1/2 flex justify-between ">
                        <Input className="w-125 bg-primary-foreground" placeholder="Pesquise por algum usuário"/>
                        <Button className="cursor-pointer dark:text-white"><SearchIcon /></Button>
                    </div>
                    <div className="flex justify-between w-65">
                        <Button className="cursor-pointer w-30 bg-chart-2 dark:text-white">Cadastrar</Button>
                        <Button className="cursor-pointer w-30 bg-destructive hover:bg-destructive dark:text-white">Excluir</Button>
                    </div>
                </CardHeader>
                <DataTable columns={columns} data={data} />
            </Card>
        </div>
    )
}