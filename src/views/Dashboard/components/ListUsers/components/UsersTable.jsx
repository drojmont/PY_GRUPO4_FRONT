import { useState, useEffect, useCallback } from 'react';
import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Avatar,
  Tooltip,
  Switch,
  Alert
} from '@material-tailwind/react';
import { MdAdminPanelSettings, MdErrorOutline } from 'react-icons/md';
import PaginationTable from '../../ListUsers/components/PaginationTable';
import { updateUserRole, fetchUsers } from '../../../../../services/userService';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [currentUsersPerPage, setCurrentUsersPerPage] = useState([]);

  // Fetch users with improved error handling
  const loadUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetchUsers();
      
      // Validate response
      if (!Array.isArray(response)) {
        throw new Error('Invalid response format');
      }
      
      setUsers(response);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message || 'No se pudieron cargar los usuarios');
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // Pagination effect
  useEffect(() => {
    if (Array.isArray(users) && users.length > 0) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const sortedUsers = [...users].sort((a, b) => a.id - b.id);
      const updatedUsers = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentUsersPerPage(updatedUsers);
    } else {
      setCurrentUsersPerPage([]);
    }
  }, [users, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = users.length > 0 
    ? Math.ceil(users.length / itemsPerPage) 
    : 0;

  // Handle admin permission toggle
  const handleAdminToggle = async (userId, currentRole) => {
    try {
      const newRole = currentRole !== 'ADMIN';
      await updateUserRole(userId, newRole);
      
      // Optimistic update
      const updatedUsers = users.map(user => 
        user.id === userId 
          ? { ...user, role: newRole ? 'ADMIN' : 'CLIENT' }
          : user
      );
      
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating admin status:', error);
      // Optional: Show a toast or alert to the user
      alert('No se pudo actualizar el rol del usuario');
    }
  };

  // Retry loading users
  const handleRetry = () => {
    loadUsers();
  };

  return (
    <Card className="h-full w-full mx-auto max-w-[900px] border mb-5">
      {error && (
        <Alert 
          color="red" 
          icon={<MdErrorOutline className="h-6 w-6" />}
          action={
            <button 
              onClick={handleRetry} 
              className="underline text-white"
            >
              Reintentar
            </button>
          }
        >
          {error}
        </Alert>
      )}
      
      <CardBody className="max-h-[540px] overflow-hidden overflow-x-auto p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {['Id', 'Usuario', 'Email', 'Permisos de Administrador'].map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-anti-flash-white p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 pl-4"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <p>Cargando usuarios...</p>
                </td>
              </tr>
            ) : currentUsersPerPage.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <p>No hay usuarios disponibles</p>
                </td>
              </tr>
            ) : (
              currentUsersPerPage.map((user) => (
                <tr
                  key={`user-${user.id}`}
                  className="border-b border-anti-flash-white border-[3px]"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal px-4"
                    >
                      {user.id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar 
                        src={user.avatar || '/default-avatar.png'} 
                        alt={user.username} 
                        size="sm" 
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.username}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Tooltip 
                      content={user.role === 'ADMIN' ? "Quitar permisos de admin" : "Dar permisos de admin"}
                      className="bg-anti-flash-white text-jet"
                    >
                      <div className="flex items-center gap-2">
                        <MdAdminPanelSettings 
                          size={20} 
                          color={user.role === 'ADMIN' ? 'green' : 'gray'}
                        />
                        <Switch
                          checked={user.role === 'ADMIN'}
                          onChange={() => handleAdminToggle(user.id, user.role)}
                          color="green"
                        />
                      </div>
                    </Tooltip>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center gap-3 border-t border-blue-gray-50 p-4">
        <PaginationTable
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          setCurrentPage={setCurrentPage}
        />
      </CardFooter>
    </Card>
  );
};

export default UsersTable;