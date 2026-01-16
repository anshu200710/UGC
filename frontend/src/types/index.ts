import type React from 'react';

export interface UploadZoneProps {
    label: string;
    file: File | null;
    onCler: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
