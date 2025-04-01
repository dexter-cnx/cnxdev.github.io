async function loadFaceAPI() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    console.log("Face API Loaded");
}

async function startCamera(videoElementId) {
    const video = document.getElementById(videoElementId);
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then((stream) => video.srcObject = stream)
        .catch((err) => console.error("Camera error:", err));
}

async function detectFace(videoElementId) {
    const video = document.getElementById(videoElementId);
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
    return detections.length > 0; // คืนค่า true ถ้าพบใบหน้า
}

async function captureFace(videoElementId) {
    const video = document.getElementById(videoElementId);
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png'); // คืนค่ารูปเป็น Base64
}
