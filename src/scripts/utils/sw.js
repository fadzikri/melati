import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("Tidak terdapat dukungan Service Worker pada peramban ini.");
    return;
  }

  const wb = new WorkboxWindow.Workbox("./sw.bundle.js");

  try {
    await wb.register();
    console.log("Mendaftar Service Worker...");
  } catch (error) {
    console.log("Kesalahan saat mendaftar Service Worker.\n", error);
  }
};

export default swRegister;
