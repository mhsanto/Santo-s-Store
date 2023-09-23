import fs from "fs";
import path from "path";
import crypto from "crypto"
const photoFolderPath = "../public/images/speakers";

fs.readdir(photoFolderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const imagesData = files.map((fileName) => {
    const id = crypto.randomUUID();
    const imagePath = path.join(photoFolderPath, fileName);
    const name = fileName; // Add the name for the image
    const details = ""; // Add the details for the image
    const price = (Math.random() * 150).toFixed(2);
    const category = "speakers";
    return {
      id,
      name,
      details,
      price,
      imagePath,
      category,
    };
  });
  const jsonData = JSON.stringify(imagesData);
  fs.writeFile("imgaesData.json", jsonData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("JSON data has been written to imageData.json");
  });
});
