import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom";

const PatientItem = () => {
    return (
        <div>
            <Table> 
                <TableCaption>Patient Information</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Patient Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>DOB</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>Weight</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>12 Jan 1980</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>1212121212</TableCell>
                        <TableCell>70 KG</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell><Link to="/patientinfo"> View </Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
export default PatientItem;
