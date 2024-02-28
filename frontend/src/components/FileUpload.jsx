// FileUpload.js
import React from 'react';

const FileUpload = () => {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                // Handle response accordingly
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div>
            <h2>Upload File</h2>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
