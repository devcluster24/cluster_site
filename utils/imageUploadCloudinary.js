const CLOUDINARY_CLUD_NAME = "dzkmp0xxd";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLUD_NAME}/image/upload`;
const UPLOAD_PRESET = "sr_photo_up";

// Define file name generation function
const generateFileName = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const date = now.getDate().toString().padStart(2, "0");

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  const randomId = Math.floor(Math.random() * 1000000).toString();

  return `${month}-${date}-${year}-${hours}-${minutes}-${seconds}-${ampm}-${randomId}`;
};

// Define image upload function to Cloudinary
const imageUploadCloudinary = async (image) => {
  // Check if image exists
  if (image) {
    const fileName = generateFileName();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("public_id", fileName);

    // Send request to Cloudinary API
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    // Handle response from Cloudinary
    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary.");
    }

    const data = await response.json();
    return data.secure_url; // Return secure URL of uploaded image
  } else {
    // Throw error if image is not provided
    throw new Error("Image not found");
  }
};

export default imageUploadCloudinary;
