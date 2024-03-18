import { Input } from "../ui/input";
import PatientCard from "./patient-card";
import PatientInfo from "./patient-info";
import PatientItem from "./patient-item";

const PatientHero = () => {
    return (
        <div>
            <div className="text-4xl font-semibold">
                All Patients
                <div className="p-10">
                    <Input placeholder="Search Patients by Name, Phone Number, Email or Patient Id" />
                </div>
            </div>
            <div>
                <PatientInfo />
            </div>
        </div>
    );
};
export default PatientHero;
