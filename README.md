# 🚀 DevOps Project 4: Containerize an Application Using Docker

---

## 📌 Objective

Create a Docker image and run an application inside a container.

---

## 📖 Problem Statement

You are required to containerize an application using Docker so that it can run consistently across different environments.

---

## 📋 Tasks

1. Create a Dockerfile
2. Build a Docker image
3. Run a Docker container
4. Expose application port
5. Verify application inside container

---

## 🛠️ Tech Stack

* Docker
* Node.js (Sample Application)
* Linux / AWS EC2

---

## 📁 Project Structure

```bash
docker-app/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── screenshots/
└── README.md
```

---

## ⚙️ Implementation Steps

### 🔹 Step 1: Create Application

A simple Node.js server is created to run inside the container.

---

### 🔹 Step 2: Create Dockerfile

Defines the environment and instructions to build the image.

---

### 🔹 Step 3: Build Docker Image

```bash
docker build -t docker-app .
```

---

### 🔹 Step 4: Run Docker Container

```bash
docker run -d -p 3000:3000 --name docker-container docker-app
```

---

### 🔹 Step 5: Verify Application

Open in browser:

```
http://localhost:3000
```

OR (EC2):

```
http://<your-public-ip>:3000
```

---

## 📸 Screenshots


<img width="2058" height="1198" alt="image" src="https://github.com/user-attachments/assets/379b0850-44ba-4ac8-aa40-3e38ceb97b3d" />
<img width="2332" height="206" alt="image" src="https://github.com/user-attachments/assets/039bdb70-3809-49b4-b975-fc2a4927e4b6" />

###  result

<img width="2000" height="1170" alt="image" src="https://github.com/user-attachments/assets/7d7c470a-47e0-4a46-899d-9bda51e165e8" />


---

##  Expected Outcome

A running Docker container serving an application.

---

##  Key Learnings

* Understanding Docker basics
* Writing Dockerfiles
* Building and running containers
* Port mapping and networking
* Deploying containerized apps

---

##  Author

**Jeny**

---
