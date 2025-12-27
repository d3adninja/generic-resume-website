"use client";

import { useEffect } from "react";

export default function ServiceWorkerKiller() {
    useEffect(() => {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    console.log("Unregistering service worker:", registration);
                    registration.unregister();
                }
            });
            // Also forcibly clear caches
            caches.keys().then((names) => {
                for (const name of names) {
                    caches.delete(name);
                }
            });
        }
    }, []);

    return null;
}
