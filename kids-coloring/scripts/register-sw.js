'use strict';
{
    // Function to register the service worker
    window.C3_RegisterSW = async function C3_RegisterSW() {
        // Check if service worker is supported
        if (!navigator.serviceWorker) return;
        
        try {
            // Register service worker with scope set to root
            const reg = await navigator.serviceWorker.register("sw.js", {scope: "./"});
            console.info("Registered service worker on " + reg.scope);
        } catch (err) {
            console.warn("Failed to register service worker: ", err);
        }
    }
}
