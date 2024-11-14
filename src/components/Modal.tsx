import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    title: string;
    children: ReactNode;
}

const Dialog = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Close>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Close
        ref={ref}
        className={cn("absolute top-4 right-4", className)}
        {...props}
    />
));

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPrimitive.Content
        ref={ref}
        className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full h-[300px] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
        )}
        {...props}
    >
        {children}
    </DialogPrimitive.Content>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn("text-3xl font-semibold tracking-tight", className)}
        {...props}
    />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const Modal = ({ isOpen, onOpenChange, title, children }: ModalProps) => (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogPortal>
            <DialogOverlay />
            <DialogContent>
                <DialogClose>X</DialogClose>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </DialogContent>
        </DialogPortal>
    </Dialog>
);

export { Modal };
