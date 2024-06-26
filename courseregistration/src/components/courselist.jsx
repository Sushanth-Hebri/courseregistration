import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function CourseTable({ courses }) {
  // Calculate total credits
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);

  return (
    <Table variant="simple" fontSize="sm" border="1px solid #ccc" borderRadius="md">
      <Thead>
        <Tr>
          <Th fontSize="md" borderBottom="1px solid #ccc">Course Name</Th>
          <Th fontSize="md" borderBottom="1px solid #ccc">Course ID</Th>
          <Th fontSize="md" borderBottom="1px solid #ccc">Credits</Th>
        </Tr>
      </Thead>
      <Tbody>
        {courses.map((course) => (
          <Tr key={course.id} borderBottom="1px solid #ccc">
            <Td>{course.name}</Td>
            <Td>{course.id}</Td>
            <Td>{course.credits}</Td>
          </Tr>
        ))}
        <Tr borderTop='2px' borderColor='black'>
          <Td></Td>
          <Td>Total Credits</Td>
          <Td fontWeight="bold" borderBottom="2px solid #ccc">{totalCredits}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default CourseTable;
