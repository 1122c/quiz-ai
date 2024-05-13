"use client"
import { UseState, useState } from "react";

const UploadDoc = () => {
    const [document, setDocument] = useState<Blob | File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
    }
    

    return (
       <div className="w-full">
        <form className="w-full">
<label htmlFor="document" className="bg-secondary w-full flex h-20 rounded-md border-4 border-dashed border-blue-900 relative"><div className="absolute inset-0 m-auto flex justify-center items-center">{"drag a file here"}
    </div></label>
<input type="file" id="document" className="relative block w-full h-full z-50 opacity-0"/>
        </form>
       </div> 
    )
}

export default UploadDoc;