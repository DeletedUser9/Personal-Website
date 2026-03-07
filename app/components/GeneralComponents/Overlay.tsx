import React from "react";


export default function Overlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            <div className="vhs-scanlines absolute inset-0" />
            <div className="vhs-sweep absolute inset-0" />
            <div className="vhs-sweep2 absolute inset-0" />
        </div>
    )
}