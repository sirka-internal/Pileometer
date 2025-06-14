import { Purchases } from "@revenuecat/purchases-js";

const WEB_BILLING_PUBLIC_API_KEY='rcb_sb_UhNhXZvSKjzHVKDyRqzhbSzkO'
const appUserId = Math.floor(Math.random()*1e6).toString()
localStorage.setItem("appUserId", appUserId); //TODO: replace with firebase id!!
const buttons = document.querySelectorAll('.paywall-plan-button');

async function initPurchases() {
    Purchases.configure(WEB_BILLING_PUBLIC_API_KEY, appUserId);
    const offerings = await Purchases.getSharedInstance().getOfferings();
    const rcPackages = offerings.all.pileometer_pro_new_subscription.availablePackages;
    window.rcPackages = rcPackages;

    const defaultButton = buttons[1];
    if (defaultButton) {
        handleButtonClick(defaultButton);
    }
}

initPurchases();