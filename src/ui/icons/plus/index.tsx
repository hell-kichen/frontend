import React from "react";

interface PlusIconProps {
    stroke?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ stroke }) => {
    return (
        <svg
            width={16}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 1.5v14M1 8.5h14"
                stroke={stroke || '#4A61DD'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default PlusIcon;