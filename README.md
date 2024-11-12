# design-system-whisperit

design-system-whisperit is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install design-system-whisperit into your project with NPM:

```bash
npm install design-system-whisperit
```

## Usage

After installation, you must import the main CSS file in your project to access the full range of styles provided by Tailwind CSS. Add the following line to the root of your project such as `App.tsx` or `main.tsx`:

```javascript
import "design-system-whisperit/styles";
```

And then you can import components from `design-system-whisperit` directly like below

```typescript
import { Button, Calendar } from "design-system-whisperit";
import React from "react";

export default function MainPage() {
    const [date, setDate] = React.useState<Date>();

    return (
        <>
            <Calendar selected={date} onSelect={setDate} />
            <Button variant="outline" size="xl">
                Default Button
            </Button>
        </>
    );
}
```

This ensures that all design-system-whisperit components render with the intended design specifications.

## Storybook-site

https://67332d1cfa871363829c3554-yafmccgneo.chromatic.com/
