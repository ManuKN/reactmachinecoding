import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

const Drag = () => {
    const [files, setFiles] = useState([]);

    const handleChange = (newFile) => {
        const fileArray = Array.isArray(newFile) ? newFile : [newFile];
        setFiles((prev) => [...prev, ...fileArray]);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            {/* Upload Box */}
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                multiple={true}
            >
                <div className="w-[90%] max-w-[800px] h-36 flex flex-col items-center justify-center border-2 border-dashed border-blue-500 rounded-md cursor-pointer hover:bg-blue-50 transition-all bg-white">
                    <img
                        src="/upload.svg"
                        alt="Upload Icon"
                        className="w-6 h-6 mb-1"
                    />
                    <p className="text-blue-600 text-sm font-medium">
                        Click to upload or drag and drop
                    </p>
                </div>
            </FileUploader>

            {/* Uploaded Files Preview (outside box) */}
            {files.length > 0 && (
                <div className="mt-6 w-[700px]">
                    <h3 className="text-base font-semibold mb-2 text-gray-800">
                        Uploaded Files:
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        {files.map((file, index) => (
                            <li key={index}>
                                {file.name} ({(file.size / 1024).toFixed(1)} KB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Drag;
