import React from "react";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Dummy data structure
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  joinDate: string;
}

// Sample dummy data
const dummyUsers: User[] = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john.doe@example.com", 
    role: "Admin", 
    status: "active", 
    joinDate: "2023-01-15" 
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    email: "jane.smith@example.com", 
    role: "User", 
    status: "active", 
    joinDate: "2023-02-20" 
  },
  { 
    id: 3, 
    name: "Robert Johnson", 
    email: "robert.j@example.com", 
    role: "Editor", 
    status: "inactive", 
    joinDate: "2023-03-10" 
  },
  { 
    id: 4, 
    name: "Emily Davis", 
    email: "emily.davis@example.com", 
    role: "User", 
    status: "pending", 
    joinDate: "2023-04-05" 
  },
  { 
    id: 5, 
    name: "Michael Wilson", 
    email: "m.wilson@example.com", 
    role: "User", 
    status: "active", 
    joinDate: "2023-05-18" 
  },
];

export function DataTable() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">User Data</h2>
      <div className="rounded-md border">
        <Table>
          <TableCaption>A list of users in the system</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : user.status === 'inactive'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}