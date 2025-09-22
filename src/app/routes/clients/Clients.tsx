import { useState } from 'react';
import { Table, TextInput, Group, Title, Button, Badge, Avatar, ActionIcon, Menu, Stack, Paper, Pagination, Text } from '@mantine/core';
import { IconSearch, IconPlus, IconDots, IconEdit, IconEye, IconTrash, IconMail, IconPhone } from '@tabler/icons-react';

const clientsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 123-4567',
    package: 'Premium',
    sessionsLeft: 8,
    nextSession: '2024-01-10',
    status: 'active'
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    phone: '(555) 234-5678',
    package: 'Basic',
    sessionsLeft: 3,
    nextSession: '2024-01-09',
    status: 'active'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@email.com',
    phone: '(555) 345-6789',
    package: 'Premium',
    sessionsLeft: 0,
    nextSession: '-',
    status: 'renewal'
  },
  {
    id: 4,
    name: 'James Brown',
    email: 'j.brown@email.com',
    phone: '(555) 456-7890',
    package: 'Elite',
    sessionsLeft: 12,
    nextSession: '2024-01-09',
    status: 'active'
  },
  {
    id: 5,
    name: 'Lisa Garcia',
    email: 'lisa.g@email.com',
    phone: '(555) 567-8901',
    package: 'Basic',
    sessionsLeft: 5,
    nextSession: '2024-01-11',
    status: 'active'
  }
];

function Clients() {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const filteredClients = clientsData.filter(client =>
    client.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    client.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'green';
      case 'renewal': return 'orange';
      case 'inactive': return 'gray';
      default: return 'gray';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Clients</Title>
        <Button leftSection={<IconPlus size={16} />}>
          Add Client
        </Button>
      </Group>

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Stack gap="md">
          <TextInput
            placeholder="Search clients..."
            leftSection={<IconSearch size={16} />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />

          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Client</Table.Th>
                <Table.Th>Contact</Table.Th>
                <Table.Th>Package</Table.Th>
                <Table.Th>Sessions Left</Table.Th>
                <Table.Th>Next Session</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredClients.map((client) => (
                <Table.Tr key={client.id}>
                  <Table.Td>
                    <Group gap="sm">
                      <Avatar size="sm" radius="xl" color="blue">
                        {getInitials(client.name)}
                      </Avatar>
                      <Text fw={500}>{client.name}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Stack gap={2}>
                      <Group gap={4}>
                        <IconMail size={14} />
                        <Text size="sm">{client.email}</Text>
                      </Group>
                      <Group gap={4}>
                        <IconPhone size={14} />
                        <Text size="sm">{client.phone}</Text>
                      </Group>
                    </Stack>
                  </Table.Td>
                  <Table.Td>
                    <Badge variant="outline">{client.package}</Badge>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      variant="filled"
                      color={client.sessionsLeft > 3 ? 'blue' : client.sessionsLeft > 0 ? 'orange' : 'red'}
                    >
                      {client.sessionsLeft}
                    </Badge>
                  </Table.Td>
                  <Table.Td>{client.nextSession}</Table.Td>
                  <Table.Td>
                    <Badge
                      size="sm"
                      variant="light"
                      color={getStatusColor(client.status)}
                    >
                      {client.status}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Menu position="bottom-end" shadow="md">
                      <Menu.Target>
                        <ActionIcon variant="subtle">
                          <IconDots size={16} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item leftSection={<IconEye size={14} />}>
                          View Details
                        </Menu.Item>
                        <Menu.Item leftSection={<IconEdit size={14} />}>
                          Edit Client
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
                          Delete
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          <Group justify="center">
            <Pagination total={5} value={page} onChange={setPage} />
          </Group>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Clients;