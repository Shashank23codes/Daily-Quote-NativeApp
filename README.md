# Daily Inspiration App 💡

A beautiful, minimal mobile application built with React Native and Expo that delivers daily inspirational quotes. The app features a clean "Notion-inspired" design, dark/light mode toggle, and a history of viewed quotes.

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## 📱 Features

*   **Daily Quotes**: Get a new inspirational quote with a single tap.
*   **Beautiful UI**: Clean, flat design inspired by Notion's aesthetic.
*   **Dark/Light Theme**: Fully supported themed interface that adapts to your preference.
*   **Navigation**: Bottom tab navigation for easy access to Home, History, and Settings.
*   **Cross-Platform**: Runs seamlessly on both Android and Web (iOS supported but requires a specialized build environment or Mac).

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine and your mobile device.

### 1️⃣ Prerequisites

Before you begin, ensure you have the following installed on your computer:

*   **Node.js** (LTS version recommended): [Download Here](https://nodejs.org/)
*   **Git**: [Download Here](https://git-scm.com/)

**For Mobile Testing:**
*   Download the **Expo Go** app on your phone:
    *   [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
    *   [iOS App Store](https://apps.apple.com/us/app/expo-go/id982107779)

---

### 2️⃣ Installation

1.  **Clone the repository** (download the code):
    Open your terminal (Command Prompt, PowerShell, or Terminal) and run:
    ```bash
    git clone <YOUR_REPOSITORY_URL_HERE>
    cd MYNativeApp
    ```

2.  **Install Dependencies**:
    This downloads all the necessary libraries to run the app.
    ```bash
    npm install
    ```

---

### 3️⃣ How to Run the App

#### 📱 Option A: Run on your Android/iOS Device (Recommended)

This is the best way to test the app as it provides a real native experience.

**Important Note for Connection Issues:**
Sometimes, your phone cannot connect to your computer due to firewall restrictions or different networks. To solve this, we use a **Tunnel** connection.

1.  Run the following command in your terminal:
    ```bash
    npm run tunnel
    ```
    *(This command runs `npx expo start --tunnel` which creates a publicly accessible link)*

2.  Wait for the QR code to appear in the terminal.

3.  **On Android**:
    *   Open the **Expo Go** app.
    *   Tap **"Scan QR Code"**.
    *   Scan the QR code shown in your terminal.

4.  **On iOS**:
    *   Open the standard **Camera** app.
    *   Scan the QR code.
    *   Tap the notification to open it in Expo Go.

The app should now load on your phone! 

> **Note:** The first load might take a minute or two as it bundles the JavaScript.

#### 💻 Option B: Run on Web Browser

If you don't have a phone handy, you can run it in your browser.

1.  Run this command:
    ```bash
    npm run web
    ```
2.  Press `w` in the terminal if it doesn't open automatically.
3.  The app will open in your default web browser (e.g., Chrome).

---

## 🛠 Troubleshooting Common Issues

**1. "Network response timed out" or "Something went wrong" on the phone**
*   **Solution**: This usually happens if your phone and computer can't "talk" to each other. fully stop the server (Ctrl + C) and restart it using the **Tunnel** command:
    ```bash
    npm run tunnel
    ```

**2. "Expo Go" crashes or closes immediately**
*   **Solution**: Ensure both your phone and computer are on the same Wi-Fi network (if not using tunnel), or try clearing the Expo Go app data.

**3. "Command not found"**
*   **Solution**: Make sure you installed Node.js and restarted your terminal.

---

## 📂 Project Structure

*   **App.js**: The main entry point where navigation is set up.
*   **src/screens/**: Contains the visual screens (Home, History, Settings).
*   **src/context/**: Contains the `ThemeContext` which manages Dark/Light mode logic.

---

## 🤝 Contributing

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

*Built with ❤️ using React Native & Expo*
