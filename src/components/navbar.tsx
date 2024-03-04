import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between px-[120px] h-[70px] items-center border-b-2 border-gray-200 ">
            <div className="font-semibold gap-x-2 flex flex-row">
                KayaHealth Connect
            </div>
            <div className="flex flex-row gap-x-[35px]">
                <Link to="/login">
                    <Button size="lg">Login</Button>
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
