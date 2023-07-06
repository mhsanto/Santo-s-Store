import fs from "fs";
import path from "path";

const photoFolderPath = "../public/images/lunch";

fs.readdir(photoFolderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const imagesData = files.map((fileName) => {
    const imagePath = path.join(photoFolderPath, fileName);
    const name = ""; // Add the name for the image
    const details = ""; // Add the details for the image
    const price = "";
    return {
      name,
      details,
      price,
      imagePath,
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
