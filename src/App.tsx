import { Button } from "./components/Button";
import { Calendar } from "./components/Calendar";
import React, { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
    const [date, setDate] = React.useState<Date>();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Calendar selected={date} onSelect={setDate} />
            <Button
                variant="destructive"
                size="xl"
                onClick={() => setIsOpen(true)}
            >
                Test Button
            </Button>
            <Modal isOpen={isOpen} onOpenChange={setIsOpen} title="모달 타이틀">
                <div className="py-6">Modal Content</div>
            </Modal>
        </>
    );
}

export default App;
