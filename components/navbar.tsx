import { Code, Code2 } from "lucide-react";

export default function NavBar() {
    return (
        <header className="p-4 bg-[#dddddd]">
            <div className="w-10 h-10 text-white rounded-lg bg-blue-500 flex items-center justify-center">
                <Code2 size={30}/>
            </div>
        </header>
    )
}