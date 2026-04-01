# 🚀 GraphixDSA

### Interactive 3D Data Structure & Algorithm Visualizer

> Visualize Data Structures Like Never Before — in 3D.

---

## 📌 Overview

**GraphixDSA** is an interactive 3D visualization platform designed to help users understand Data Structures and Algorithms in a more intuitive and engaging way.

It transforms abstract concepts like Trees and Traversals into **real-time, animated 3D experiences**, making learning both effective and visually appealing.

---

## ✨ Features

* 🌳 **3D Binary Tree Visualization**
* 🔄 **Traversal Animations**

  * Preorder
  * Inorder
  * Postorder
* 🎮 **Interactive Controls**

  * Play / Pause
  * Step Forward / Backward
  * Speed Control
* ➕ **Dynamic Node Insertion**
* 🎯 **Real-time Node Highlighting**
* 🎥 **Smooth Animations (Scaling Effects)**
* 🧠 **Optimized Layout Algorithm (No Overlap for Large Trees)**

---

## 🛠️ Tech Stack

| Category       | Technology        |
| -------------- | ----------------- |
| Frontend       | React (Vite)      |
| 3D Rendering   | Three.js          |
| Renderer Layer | React Three Fiber |
| Helpers        | Drei              |
| State Mgmt     | React Hooks       |
| Styling        | Tailwind CSS      |

---

## 🧠 How It Works

```
User Input → Tree Construction → Layout Engine → 3D Rendering → Animation Engine
```

* **Tree Logic** → Builds Binary Tree using level-order insertion
* **Layout Engine** → Converts tree structure into 3D coordinates
* **Renderer** → Displays nodes and edges using Three.js
* **Animation Engine** → Executes traversal step-by-step with highlighting

---

## 📷 Preview

> Add screenshots or a demo GIF here for best impact

Example:

```
![Demo](demo.gif)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/graphixdsa.git
cd graphixdsa
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run the Project

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── three/        # 3D components (Node, Edge)
 │    ├── ui/           # Control Panel
 │
 ├── features/
 │    ├── tree/
 │         ├── tree.logic.js
 │         ├── tree.layout.js
 │         ├── tree.animation.js
 │         ├── TreeVisualizer.jsx
 │
 ├── App.jsx
 ├── main.jsx
```

---

## 🧩 Future Enhancements

* 📊 Graph Visualization (BFS / DFS)
* 🎯 Edge Highlighting during traversal
* 🎮 Drag & Drop Nodes
* 💾 Save / Load Tree Structures
* 🤖 AI-based Explanation Mode

---

## 🏆 Why This Project?

This project demonstrates:

* Advanced Frontend Engineering
* 3D Graphics Programming
* Strong Data Structures & Algorithms Knowledge
* Clean System Architecture
* Interactive UI/UX Design

---

## 👨‍💻 Author

**Rishi Tiwari**

* GitHub: https://github.com/tiwarishi007
* LinkedIn: *(www.linkedin.com/in/rishi-tiwari-657212283)*

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!
