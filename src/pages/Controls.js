import React from 'react'
import { Link } from "react-router-dom";

export default function Controls() {
    return (
        <section className="controls">
            <Link to="/"><img src="/images/logo.png" alt="" /></Link>
        </section>
    )
}
