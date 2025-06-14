import { Purchases } from "@revenuecat/purchases-js";

const WEB_BILLING_PUBLIC_API_KEY='rcb_sb_UhNhXZvSKjzHVKDyRqzhbSzkO'
const appUserId = localStorage.getItem("appUserId") || Math.floor(Math.random()*1e6).toString();  //TODO: replace with firebase id!!

async function initCheckout() {
    Purchases.configure(WEB_BILLING_PUBLIC_API_KEY, appUserId);
    const rcPackage = JSON.parse(localStorage.getItem("selectedPackage"));
    const target = document.getElementById("rcTarget")

    try {
        console.log(rcPackage)
        const { customerInfo } = await Purchases.getSharedInstance().purchase({
            rcPackage,
            htmlTarget: target, 
        });

        if (Object.keys(customerInfo.entitlements.active).includes("Pileometer Pro")) {
            console.log("Pro content unlocked");
            window.location.href = "/pages/thankyou.html";
        }
    } catch (e) {
        console.error("Purchase error:", e);
        alert(e)
    }
}

initCheckout();