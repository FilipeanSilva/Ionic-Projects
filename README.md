# **Ionic Mobile Application – Cross-Platform Development**

## **About the Project**
This project was developed as part of the **Mobile Architectures** course during the **2020/2021** academic year. The main objective was to study and implement a **cross-platform mobile application** using **Ionic**, a framework that allows developers to create applications for **both web and mobile platforms** with a single codebase.

## **Features**
- **Cross-Platform Development**
  - The application is built using **Ionic**, allowing it to run on multiple platforms (web, Android, iOS).
- **Adaptive UI**
  - Utilizes Ionic’s **adaptive styling**, ensuring components adjust to different platforms.
- **Navigation System**
  - Implements a parallel navigation system to **preserve page states**, unlike traditional web navigation.
- **Native Access**
  - Leverages hybrid application capabilities to access **native device functionalities**.
- **Predefined Themes**
  - Uses CSS-based theming for easy customization.

## **Technical Stack**
- **Framework:** Ionic
- **Programming Languages:** HTML, CSS, JavaScript (with Angular or Vue.js)
- **Back-end:** Node.js
- **UI Components:** Ionic’s built-in components

## **Project Setup**
### **1. Installation of Required Tools**
1. Install **Node.js** (required for running Ionic).
2. Open the terminal or **CMD** and run:
   ```sh
   npm install -g @ionic/cli
   ```
3. To create a new Ionic project, run:
   ```sh
   ionic start myApp blank
   ```
4. Navigate to the project folder:
   ```sh
   cd myApp
   ```
5. To start the development server:
   ```sh
   ionic serve
   ```
   This will open a **live preview** of the application in a web browser.

## **File Structure**
The project includes the following key directories and files:

| **File/Folder**       | **Description** |
|----------------------|---------------|
| `src/`              | Contains the main application files. |
| `e2e/`              | End-to-end testing files. |
| `node_modules/`     | Installed dependencies and packages. |
| `src/app/`          | Core application logic and components. |
| `src/assets/`       | Static resources such as images and icons. |
| `src/environments/` | Environment-specific configurations. |
| `package.json`      | Project dependencies and metadata. |

## **Project Implementation**
### **Lifecycle of an Ionic Page**
- Pages in Ionic follow a **lifecycle similar to Angular**, using lifecycle hooks such as:
  - `ionViewWillEnter()`
  - `ionViewDidEnter()`
  - `ionViewWillLeave()`
  - `ionViewDidLeave()`

### **Example Projects**
#### **Project 1: Simple Text Display**
- **Objective:** Create an app where users enter text, and upon clicking a button, the text is displayed in another box.
- **Modified Files:**
  - `home.page.html`
  - `home.page.scss`
  - `home.page.ts`
  
#### **Project 2: Multi-Screen Navigation**
- **Objective:** Create an application with three different screens:
  1. A list of numbers from **1 to 1000**.
  2. A list of **50 random words**.
  3. A **detailed content list**, where each item includes an **image, text, and a number**.
- **Implemented using:** Angular-based **"tabs"** template.

#### **Project 3: Background Task Management**
- **Objective:** Implement a task system where:
  - Two numbers are read from a file.
  - The first number **increments**, and the second **decrements** every **10 seconds**.
  - The process continues until the user manually stops it.
- **Implemented using:** Vue.js with a separate **task manager script** (`manageTasks.ts`).

## **How to Run**
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/IonicApp.git
   cd IonicApp
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run the Application**
   ```sh
   ionic serve
   ```
4. **To Build the Application for Deployment**
   ```sh
   ionic build
   ```
   - To generate an **Android or iOS** build, use:
     ```sh
     ionic capacitor build android
     ionic capacitor build ios
     ```

## **Final Thoughts**
This project provided valuable hands-on experience with **Ionic**, focusing on **hybrid app development, cross-platform compatibility, UI component customization, and background task handling**. The ability to **reuse code across multiple platforms** demonstrated the efficiency of Ionic as a modern framework for mobile applications.