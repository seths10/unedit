'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';

const ImageUpload = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag &apos;n&apos; drop an image here, or click to select one</p>
      )}
      <Button className="mt-4">Upload Image</Button>
    </div>
  );
};

export default ImageUpload;