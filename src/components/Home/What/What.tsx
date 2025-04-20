"use client";

import { useRef, useState } from "react";

import styles from '@style/Home/what.module.scss';

type WhatProps = {
    icon: string;
    text: string;
    description: string;
    className: string;
};

export default function What({icon, text, description, className}: WhatProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipDirection, setTooltipDirection] = useState<"left" | "right">("right");
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isBig, setIsBig] = useState(false);

    const handleMouseEnter = () => {
        if (tooltipRef.current && wrapperRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const wrapperRect = wrapperRef.current.getBoundingClientRect();
    
            const fitsRight = tooltipRect.right <= window.innerWidth - 300;
            setTooltipDirection(fitsRight ? "right" : "left");
    
            setIsBig(wrapperRect.width > 300);
    
            setShowTooltip(true);
        }
    };    

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div ref={wrapperRef} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={`/svg/${icon}`} alt={icon} />
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.what}>
                <div className={styles.span}>?</div>
                <div
                    ref={tooltipRef}
                    className={`
                        ${styles.tooltip}
                        ${showTooltip ? styles.visible : styles.hidden}
                        ${tooltipDirection === "left" ? styles.leftAlign : styles.rightAlign}
                        ${isBig ? styles.big : ""}
                    `}
                >
                    {description}
                </div>
            </div>
        </div>
    );
}