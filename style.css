/* General styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    scroll-behavior: smooth;
}

/* Video Background */
.video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
}

/* Centered Main Content */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
    text-align: center;
}

.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.logo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

/* Typing Animation */
.typing {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    border-right: 4px solid #007bff;
    animation: typing 3s steps(20) infinite, blink-caret 0.5s step-end infinite;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #007bff; }
}

/* Button styling with 50% width */
.action-btn, .modal-btn {
    padding: 15px 0;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    width: 50%;
    max-width: 250px;
    transition: all 0.3s ease;
}

.action-btn:hover, .modal-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 2000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    transform: translateY(-50px);
    opacity: 0;
    animation: slideIn 0.5s forwards;
}

@keyframes slideIn {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.modal-content input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.switch-option {
    margin-top: 10px;
}

/* Close button styling */
.close-btn {
    font-size: 24px;
    color: #aaa;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .logo {
        width: 150px;
        height: 150px;
    }

    .typing {
        font-size: 35px;
    }

    .action-btn, .modal-btn {
        padding: 12px 24px;
        font-size: 16px;
    }
}

@media screen and (max-width: 480px) {
    .logo {
        width: 120px;
        height: 120px;
    }

    .typing {
        font-size: 28px;
    }

    .action-btn, .modal-btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}