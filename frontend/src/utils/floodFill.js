// Flood fill algorithm for bucket fill tool

export const floodFill = (imageData, x, y, fillColor) => {
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  // Get the color at the clicked position
  const targetPos = (y * width + x) * 4;
  const targetR = data[targetPos];
  const targetG = data[targetPos + 1];
  const targetB = data[targetPos + 2];
  const targetA = data[targetPos + 3];
  
  // Parse fill color
  const fillR = parseInt(fillColor.slice(1, 3), 16);
  const fillG = parseInt(fillColor.slice(3, 5), 16);
  const fillB = parseInt(fillColor.slice(5, 7), 16);
  
  // If the target color is the same as fill color, do nothing
  if (targetR === fillR && targetG === fillG && targetB === fillB) {
    return imageData;
  }
  
  // Stack for flood fill
  const pixelStack = [[x, y]];
  
  const matchesTarget = (pos) => {
    return data[pos] === targetR &&
           data[pos + 1] === targetG &&
           data[pos + 2] === targetB &&
           data[pos + 3] === targetA;
  };
  
  const colorPixel = (pos) => {
    data[pos] = fillR;
    data[pos + 1] = fillG;
    data[pos + 2] = fillB;
    data[pos + 3] = 255; // Full opacity
  };
  
  while (pixelStack.length > 0) {
    const [px, py] = pixelStack.pop();
    
    if (px < 0 || px >= width || py < 0 || py >= height) {
      continue;
    }
    
    const currentPos = (py * width + px) * 4;
    
    if (matchesTarget(currentPos)) {
      colorPixel(currentPos);
      
      // Add neighboring pixels
      pixelStack.push([px + 1, py]);
      pixelStack.push([px - 1, py]);
      pixelStack.push([px, py + 1]);
      pixelStack.push([px, py - 1]);
    }
  }
  
  return imageData;
};

export const getPixelColor = (imageData, x, y) => {
  const pos = (y * imageData.width + x) * 4;
  const r = imageData.data[pos];
  const g = imageData.data[pos + 1];
  const b = imageData.data[pos + 2];
  return `rgb(${r}, ${g}, ${b})`;
};
