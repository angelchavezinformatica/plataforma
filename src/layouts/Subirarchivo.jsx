const FileUploadButton = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      alert(`Archivo seleccionado: ${file.name}`);
      // Aquí puedes implementar la lógica para subir el archivo
    } else {
      alert("Por favor, selecciona un archivo PDF.");
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Curriculum</h2>
          <p className="text-sm text-muted-foreground">
            Asegurate de incluir un curriculum actualizado*
          </p>
        </div>

        <label className=" w-60 h-12 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16v-8m0 0l-3 3m3-3l3 3m6 8.25V15a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 15v5.25M4.5 9V5.25A2.25 2.25 0 016.75 3h10.5A2.25 2.25 0 0119.5 5.25V9"
            />
          </svg>
          <span>Adjuntar Documento</span>
        </label>

        <p>Postulación con ConnectTalent | Centro de Ayuda</p>
      </div>
    </>
  );
};

export default FileUploadButton;
