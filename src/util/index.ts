export const blobToBase64 = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => resolve(reader.result);
  reader.readAsDataURL(blob);
})

export const URLToBase64 = async (URL) => {
  const blob = await fetch(URL).then(res => res.blob());
  return await blobToBase64(blob).then(res => res);
}

export  const calcFacePos = (pos, ratio) => {
  const [x1, y1, x2, y2] = pos;
  const top = (y1 * ratio) + 'px';
  const left = (x1 * ratio) + 'px';
  const width = ((x2 - x1) * ratio) + 'px';
  const height = ((y2 - y1) * ratio) + 'px';
  
  return [top, left, width, height];
}