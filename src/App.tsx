import { Button } from "./components/Button";
import { Calendar } from "./components/Calendar";
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
