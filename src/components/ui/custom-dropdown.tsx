import { cn } from '@/lib/utils';
import {
    createContext,
    useContext,
    useRef,
    useState,
    useEffect,
    type ReactNode,
    type HTMLAttributes,
    useId,
} from 'react';

type DropdownMenuContextType = {
    open: boolean;
    setOpen: (v: boolean) => void;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const DropdownMenuContext = createContext<DropdownMenuContextType | null>(null);

// Global variable to track active dropdown
let activeDropdownId: string | null = null;

const DropdownMenu = ({ children }: { open?: boolean, setOpen?: (v: boolean) => void, children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);
    const id = useId();

    // Helper functions for mouse events
    const handleMouseEnter = () => {
        activeDropdownId = id;
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            // Only close if this dropdown is still the active one
            if (activeDropdownId === id) {
                setOpen(false);
                activeDropdownId = null;
            }
        }, 100); // 150ms delay, adjust as needed
    };

    // If another dropdown becomes active, close this one immediately
    useEffect(() => {
        if (!open) return;
        const handleDocumentMouseMove = () => {
            if (activeDropdownId !== id) {
                setOpen(false);
                if (closeTimeout.current) {
                    clearTimeout(closeTimeout.current);
                    closeTimeout.current = null;
                }
            }
        };
        document.addEventListener('mousemove', handleDocumentMouseMove);
        return () => document.removeEventListener('mousemove', handleDocumentMouseMove);
    }, [open, id]);

    return (
        <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef }}>
            <div
                className="relative inline-block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </DropdownMenuContext.Provider>
    );
};

const DropdownTrigger = ({
    children,
    className,
    ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
    const ctx = useContext(DropdownMenuContext);
    if (!ctx) throw new Error('DropdownTrigger must be inside DropdownMenu');

    return (
        <button
            ref={ctx.triggerRef}
            className={className}
            {...rest}
        >
            {children}
        </button>
    );
};

const DropdownContent = ({
    children,
    className,
    ...rest
}: HTMLAttributes<HTMLDivElement>) => {
    const ctx = useContext(DropdownMenuContext);
    if (!ctx) throw new Error('DropdownContent must be inside DropdownMenu');

    const contentRef = useRef<HTMLDivElement>(null);
    const [placement, setPlacement] = useState<'top' | 'bottom'>('bottom');
    const [position, setPosition] = useState<'left' | 'right'>('left');
    const [styles, setStyles] = useState<React.CSSProperties>({});

    useEffect(() => {
        const updatePosition = () => {
            if (!ctx.triggerRef.current || !contentRef.current) return;

            const triggerRect = ctx.triggerRef.current.getBoundingClientRect();
            const contentRect = contentRef.current.getBoundingClientRect();

            // Calculate available space in different directions
            const spaceBelow = window.innerHeight - triggerRect.bottom;
            const spaceAbove = triggerRect.top;
            const spaceRight = window.innerWidth - triggerRect.left;
            const spaceLeft = triggerRect.right;

            // Determine vertical placement
            let verticalPlacement: 'top' | 'bottom' = 'bottom';
            if (spaceBelow < contentRect.height && spaceAbove > contentRect.height) {
                verticalPlacement = 'top';
            }

            // Determine horizontal position
            let horizontalPosition: 'left' | 'right' = 'left';
            let horizontalOffset = 0;

            // Check if dropdown overflows right edge
            if (triggerRect.left + contentRect.width > window.innerWidth) {
                // Try to align right edge of dropdown with right edge of trigger
                horizontalPosition = 'right';

                // Check if that would push it off-screen to the left
                if (triggerRect.right - contentRect.width < 0) {
                    // Center it as best we can
                    horizontalPosition = 'left';
                    horizontalOffset = Math.max(0, triggerRect.left);
                    // Adjust width if needed
                    const maxWidth = window.innerWidth - horizontalOffset - 8; // 8px buffer
                    setStyles(prev => ({ ...prev, maxWidth: `${maxWidth}px` }));
                }
            }

            setPlacement(verticalPlacement);
            setPosition(horizontalPosition);

            // Calculate final position
            let newStyles: React.CSSProperties = {};

            if (horizontalPosition === 'left') {
                if (horizontalOffset > 0) {
                    newStyles.left = `${horizontalOffset}px`;
                } else {
                    newStyles.left = 0;
                }
            } else {
                newStyles.right = 0;
            }

            setStyles(newStyles);
        };

        if (ctx.open) {
            // Run initially
            updatePosition();

            // Add event listeners for dynamic updates
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition, true);

            // Cleanup
            return () => {
                window.removeEventListener('resize', updatePosition);
                window.removeEventListener('scroll', updatePosition, true);
            };
        }
    }, [ctx.open]);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                !contentRef.current?.contains(e.target as Node) &&
                !ctx?.triggerRef.current?.contains(e.target as Node)
            ) {
                ctx?.setOpen(false);
            }
        }

        if (ctx.open) {
            document.addEventListener('mousedown', handleClick);
            return () => document.removeEventListener('mousedown', handleClick);
        }
    }, [ctx.open]);

    if (!ctx.open) return null;

    return (
        <div
            ref={contentRef}
            data-state={ctx.open ? 'open' : 'closed'}
            data-side={placement}
            data-align={position}
            style={styles}
            className={cn(
                'absolute rounded-lg z-50',
                'data-[side=bottom]:top-full data-[side=bottom]:mt-2',
                'data-[side=top]:bottom-full data-[side=top]:mb-2',
                'data-[align=right]:right-0',
                'data-[align=left]:left-0',
                'transition-all duration-200 ease-out opacity-0 scale-95 translate-y-2 pointer-events-none',
                'data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=open]:translate-y-0 data-[state=open]:pointer-events-auto',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export { DropdownMenu, DropdownTrigger, DropdownContent };
