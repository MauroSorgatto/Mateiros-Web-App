import { useDropzone } from "react-dropzone";
import { TreeIconSolid } from "./icons/TreeIconSolid";
import { UploadIcon } from "./icons/UploadIcon";
import { TreeIcon } from "./icons/TreeIcon";
import { AfterUpoloadIcon } from "./icons/AfterUploadIcon";
import { CheckBox } from "./icons/CheckBoxIcon";
import ProgressBar from "./icons/ProgressBar.png";

export const UploadImage = ({ disabled = false }: { disabled?: boolean }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled,
  });

  return (
    <div {...getRootProps({})}>
      <input {...getInputProps()} />
      <div className="mt-11 flex flex-row">
        <div className="flex flex-row items-center">
          <TreeIconSolid />
          <div className="mb-2 ml-2 text-lg font-semibold">Copa</div>
        </div>
      </div>

      <div className="flex flex-col border px-4 py-5">
        <div className="flex flex-row">
          <AfterUpoloadIcon />
          <div className="ml-3 flex w-full flex-col align-middle">
            <div className="flex flex-row justify-between">
              <h2 className="text-sm font-medium">CopaArvore.jpg</h2>
              <CheckBox />
            </div>
            <h2 className="text-sm font-normal">200 KB</h2>
            <div className="mt-3 flex flex-row items-center align-middle">
              <img
                src={ProgressBar}
                alt="Barra de Progesso"
                className="h-2 w-full"
              />
              <h2 className="ml-3 text-sm font-medium">100%</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-11 flex flex-row items-center">
        <TreeIcon color={"#71717A"} />
        <div className="mb-2 ml-2 text-lg font-semibold">Tronco </div>
      </div>
      <div className="flex flex-col items-center justify-center border px-4 py-5">
        <UploadIcon />
        <h2 className="px-32 text-sm">
          Clique para fazer upload,ou arraste e solte
        </h2>
        <h2 className="text-xs">SVG, PNG, JPG or GIF {"(max. 800x400px)"}</h2>
      </div>
    </div>
  );
};
