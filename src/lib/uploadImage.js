async function uploadImage(imageFile) {
  const apiUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_API_KEY
  }`;

  // Create a FormData object and append the image file
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    const displayUrl = result.data.display_url;
    return { success: true, displayUrl };
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}

export default uploadImage;
