import React from "react";
import { Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="mb-8">
                <h2 className="text-text-primary mb-2 font-display text-xl font-bold tracking-tight">
                    Get in Touch
                </h2>
                <p className="text-text-secondary text-sm">
                    Have a project in mind or just want to chat?
                </p>
            </div>

            <div className="mb-8">
                <a
                    href="mailto:nalin@nerdev.in"
                    className="bg-accent text-bg-primary hover:bg-accent/90 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-display font-semibold text-sm transition-colors"
                >
                    <Mail className="h-4 w-4" />
                    Say Hello
                </a>
            </div>

            <div className="text-text-secondary mt-10 text-xs">
                &copy; {new Date().getFullYear()} Nalin Dalal
            </div>
        </footer>
    );
}

export default Footer;
