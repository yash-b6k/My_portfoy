// src/reportWebVitals.js
import { onCLS, onFID, onLCP, onFCP, onTTFB } from "web-vitals";

function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
}

export default reportWebVitals;
