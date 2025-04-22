
# Subito.it Hide sold items

This repository contains two **Tampermonkey** user scripts to clean up Subito.it listings by automatically removing sold and "Vetrina" items.

Use one or both scripts depending on what you want to filter out:

- **Hide "Venduto" Items** — Removes listings marked as *sold*.
- **Hide "Vetrina" Items** — Removes listings promoted as *featured*.

## Installation Instructions

### 1. Install Tampermonkey
Tampermonkey is a browser extension that allows you to run custom scripts on websites.

- [Chrome / Chromium-based](https://tampermonkey.net/?ext=dhdg&browser=chrome)
- [Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
- [Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
- [Microsoft Edge](https://tampermonkey.net/?ext=dhdg&browser=edge)

---

### 2. Install the Scripts

Once Tampermonkey is installed:

1. Clone or download this repository.
2. Open Tampermonkey Dashboard (`chrome://extensions` → Tampermonkey → Dashboard).
3. Click the "+" **"Create a new script..."** button.
4. Paste the content from either `hide-venduto.user.js` or `hide-vetrina.user.js`.
5. Save the script.

The script will now automatically run whenever you visit [Subito.it](https://www.subito.it), hiding the corresponding items. Check on the console for confirmation.

---

If you run into issues or the site layout changes, feel free to open an issue or pull request!
