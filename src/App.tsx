import { Button } from "@/components/button";
import { Calendar } from "./components/calendar";
import React from "react";

function App() {
    const [date, setDate] = React.useState<Date>();

    return (
        <>
            <Calendar selected={date} onSelect={setDate} />
            <Button variant="outline" size="xl">
                Test Button
            </Button>
        </>
    );
}

export default App;
