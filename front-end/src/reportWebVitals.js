import { getCLS, getFID, getLCP, getFCP } from 'web-vitals';

function reportWebVitals(metric) {
    switch (metric.name) {
      case 'first-contentful-paint':
        // handle FCP metric
        break;
      case 'largest-contentful-paint':
        // handle LCP metric
        break;
      case 'layout-shift':
        // handle CLS metric
        break;
      case 'first-input-delay':
        // handle FID metric
        break;
      default:
        break;
    }
  }
  
function sendToAnalytics(metric) {
    reportWebVitals(metric);
  }
  
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
  getFCP(sendToAnalytics);

export default reportWebVitals;