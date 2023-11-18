import React from 'react';
import { twMerge } from 'tailwind-merge';
// password - PSlfVZ0XuNjhHxXX
// supbase token - sbp_0efaea75ab5054d9aaebb8ba259bf236cedfc0c5
interface BoxProps {
    children: React.ReactNode
    className?: string
}

const Box:React.FC<BoxProps> = ({ children, className }) => {
    return (
        <div className={twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `, className)}>
            {children}
        </div>
    )
}

export default Box;