# Phase 3
# Based on the zap report (Phase3_first_report-.md), the 5 most important points that I think should be fixed as soon as possible:

| What is wrong?  | How did I find it? | How should it work? | What should be fixed?  |
| ------------- | ------------- | ------------- | ------------- |
| The form-action directive in the Content Security Policy (CSP) is not set or is overly broad, effectively allowing any source. This weakens protection against Cross-Site Scripting (XSS) and data injection attacks. | Detected as a Medium-risk issue in the ZAP report. The evidence highlights that the form-action directive is missing or incorrectly configured. | Set the form-action directive explicitly in the CSP header to restrict which origins can handle form submissions. For example: | Content-Security-Policy: form-action 'self'; |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |
| ------------- | ------------- | ------------- | ------------- |