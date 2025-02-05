// Edit By AIDE@2025.01

'use strict';{
    // Service Worker registration function
    window.C3_RegisterSW=async function C3_RegisterSW(){
        if(!navigator.serviceWorker)return;
        try{
            // Register service worker with scope
            const reg=await navigator.serviceWorker.register("sw.js",{scope:"./"});
            console.info("Registered service worker on "+reg.scope)
        }catch(err){
            console.warn("Failed to register service worker: ",err)
        }
    }
};
