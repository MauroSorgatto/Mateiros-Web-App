import { useDropzone } from "react-dropzone";

export const UploadImage = ({ disabled = false }: { disabled?: boolean }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled,
  });

  return (
    <div {...getRootProps({})}>
      <input {...getInputProps()} />
      <div className="flex flex-row">
        <div>image</div>
        <div>Copa</div>
      </div>
      <div className="flex flex-col border px-4 py-5">
        <div>image</div>
        <h2>Clique para fazer upload,ou arraste e solte</h2>
        <h2>SVG, PNG, JPG or GIF {"(max. 800x400px)"}</h2>
      </div>
    </div>
  );
};
