import React from "react";
import GithubHoverCard from "@/components/GithubHoverCard";
import TwitterHoverCard from "@/components/TwitterHoverCard";
import LinkedinHoverCard from "@/components/LinkedinHoverCard";

function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="flex flex-wrap gap-3">
                <GithubHoverCard username="nalindalal" variant="card" />
                <LinkedinHoverCard
                    username="nalin-dalal"
                    name="Nalin Dalal"
                    headline="Full Stack Engineer"
                    connections="500+"
                    location="India"
                    variant="card"
                />
                <TwitterHoverCard
                    username="nalin82929"
                    name="Nalin Dalal"
                    variant="card"
                />
            </div>
        </footer>
    );
}

export default Footer;
