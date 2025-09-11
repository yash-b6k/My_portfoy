import { getCLS, getINP, getLCP, getFCP, getTTFB } from "web-vitals";

function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    getCLS(onPerfEntry);
    getINP(onPerfEntry); // replaces old onFID
    getLCP(onPerfEntry);
    getFCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}

export default reportWebVitals;
