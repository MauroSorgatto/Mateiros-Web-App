import { PlusIcon } from "@heroicons/react/24/outline";
import { useDropzone } from "react-dropzone";

export const ImageDropzone = ({ disabled = false }: { disabled?: boolean }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled,
  });

  return (
    <div
      {...getRootProps({
        className: `${
          disabled
            ? "border-gray-600 bg-gray-100 opacity-25"
            : "border-amber-600 bg-amber-50"
        } m-1 flex h-48 w-48 flex-col items-center justify-center rounded border border-dashed`,
      })}
    >
      <input {...getInputProps()} />

      <PlusIcon
        width={18}
        height={18}
        className={`${disabled ? "text-gray-900" : "text-amber-500"}`}
      />
      {disabled ? null : (
        <h1 className="mt-3 flex items-center justify-center text-xs text-amber-600">
          Adicione a primeira arvore
        </h1>
      )}
    </div>
  );
};
