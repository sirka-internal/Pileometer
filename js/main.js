import { Purchases } from "@revenuecat/purchases-js";

const WEB_BILLING_PUBLIC_API_KEY='rcb_eGkVzEcZFpluGWwOCBLFyPAqzsTb'
const appUserId = "1"

const purchases = Purchases.configure(WEB_BILLING_PUBLIC_API_KEY, appUserId);

purchases.getOfferings().then((res) => {
    console.log(JSON.stringify(res, null, ' '))
    window.offerings = res;
})
