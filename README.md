EmotionSense – Real-Time Emotion Detection Dashboard

This project is a real-time AI-powered emotion recognition system built with React.js, Face-API.js, and Node.js. It detects facial expressions via webcam and provides live emotion analytics with detailed visualization, data export, and session tracking features. The system integrates modern frontend design with machine learning models to deliver interactive emotional insights.

Overview

The application captures users’ facial expressions in real-time and classifies emotions such as happiness, sadness, anger, surprise, and neutrality. It visualizes trends and distributions through interactive charts while allowing users to save, reset, and export session data. The project also supports theme customization, privacy mode, and backend session storage for persistent analytics.

Key Features

🎭 Real-Time Emotion Detection: Uses Face-API.js models for live facial expression recognition.

📊 Visual Analytics Dashboard: Displays emotion frequency, volatility, and trends via Chart.js.

💾 Session Tracking: Records and summarizes each session’s emotional data.

📥 Data Export: Supports export to CSV, JSON, and PDF formats for reporting.

🔒 Privacy Mode: Optional facial blur to protect user identity.

🎨 Customizable Themes: Light and dark UI modes with smooth transitions.

⚡ Session Management: Save and retrieve emotion sessions through backend endpoints.

🧠 Intelligent Alerts: Detects dominant emotions and triggers alerts based on thresholds.

Technology Stack

Frontend: React.js, Chart.js, Framer Motion

Machine Learning: Face-API.js (TensorFlow.js)

Backend: Node.js, Express.js

Database: LocalStorage / (optional MongoDB or PostgreSQL for session persistence)

Visualization: Chart.js (Pie & Line charts)

PDF Export: jsPDF / PDFKit
