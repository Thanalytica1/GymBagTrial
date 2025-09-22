import { useState } from 'react';
import { Tabs, Table, Group, Title, Button, Badge, Stack, Paper, Text, ActionIcon, Menu, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconPlus, IconCalendar, IconFilter, IconDots, IconEdit, IconCheck, IconX, IconClock } from '@tabler/icons-react';

const upcomingSessions = [
  {
    id: 1,
    date: '2024-01-10',
    time: '9:00 AM',
    client: 'Sarah Johnson',
    type: 'Strength Training',
    duration: '60 min',
    location: 'Gym',
    status: 'confirmed'
  },
  {
    id: 2,
    date: '2024-01-10',
    time: '10:30 AM',
    client: 'Mike Chen',
    type: 'HIIT',
    duration: '45 min',
    location: 'Gym',
    status: 'confirmed'
  },
  {
    id: 3,
    date: '2024-01-10',
    time: '2:00 PM',
    client: 'Emma Wilson',
    type: 'Yoga',
    duration: '60 min',
    location: 'Studio',
    status: 'pending'
  }
];

const completedSessions = [
  {
    id: 4,
    date: '2024-01-09',
    time: '9:00 AM',
    client: 'James Brown',
    type: 'Personal Training',
    duration: '60 min',
    location: 'Gym',
    status: 'completed',
    notes: 'Great progress on deadlifts'
  },
  {
    id: 5,
    date: '2024-01-09',
    time: '11:00 AM',
    client: 'Lisa Garcia',
    type: 'Nutrition Consult',
    duration: '30 min',
    location: 'Online',
    status: 'completed',
    notes: 'Discussed meal planning'
  },
  {
    id: 6,
    date: '2024-01-08',
    time: '3:00 PM',
    client: 'Sarah Johnson',
    type: 'Strength Training',
    duration: '60 min',
    location: 'Gym',
    status: 'no-show',
    notes: 'Client sick'
  }
];

function Sessions() {
  const [dateFilter, setDateFilter] = useState<Date | null>(null);
  const [clientFilter, setClientFilter] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <IconCheck size={14} />;
      case 'pending': return <IconClock size={14} />;
      case 'completed': return <IconCheck size={14} />;
      case 'no-show': return <IconX size={14} />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'green';
      case 'pending': return 'yellow';
      case 'completed': return 'blue';
      case 'no-show': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Sessions</Title>
        <Button leftSection={<IconPlus size={16} />}>
          Schedule Session
        </Button>
      </Group>

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Stack gap="md">
          <Group gap="sm">
            <DatePickerInput
              leftSection={<IconCalendar size={16} />}
              placeholder="Filter by date"
              value={dateFilter}
              onChange={(value) => setDateFilter(value as Date | null)}
              clearable
            />
            <Select
              leftSection={<IconFilter size={16} />}
              placeholder="Filter by client"
              data={['Sarah Johnson', 'Mike Chen', 'Emma Wilson', 'James Brown', 'Lisa Garcia']}
              value={clientFilter}
              onChange={setClientFilter}
              clearable
            />
          </Group>

          <Tabs defaultValue="upcoming">
            <Tabs.List>
              <Tabs.Tab value="upcoming" leftSection={<IconCalendar size={16} />}>
                Upcoming
              </Tabs.Tab>
              <Tabs.Tab value="completed" leftSection={<IconCheck size={16} />}>
                Completed
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="upcoming" pt="lg">
              <Table highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Date & Time</Table.Th>
                    <Table.Th>Client</Table.Th>
                    <Table.Th>Type</Table.Th>
                    <Table.Th>Duration</Table.Th>
                    <Table.Th>Location</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {upcomingSessions.map((session) => (
                    <Table.Tr key={session.id}>
                      <Table.Td>
                        <Stack gap={2}>
                          <Text fw={500}>{session.date}</Text>
                          <Text size="sm" c="dimmed">{session.time}</Text>
                        </Stack>
                      </Table.Td>
                      <Table.Td>{session.client}</Table.Td>
                      <Table.Td>{session.type}</Table.Td>
                      <Table.Td>{session.duration}</Table.Td>
                      <Table.Td>
                        <Badge variant="outline">{session.location}</Badge>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          size="sm"
                          variant="light"
                          color={getStatusColor(session.status)}
                          leftSection={getStatusIcon(session.status)}
                        >
                          {session.status}
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
                            <Menu.Item leftSection={<IconEdit size={14} />}>
                              Edit Session
                            </Menu.Item>
                            <Menu.Item leftSection={<IconCheck size={14} />}>
                              Mark Complete
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item color="red" leftSection={<IconX size={14} />}>
                              Cancel Session
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Tabs.Panel>

            <Tabs.Panel value="completed" pt="lg">
              <Table highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Date & Time</Table.Th>
                    <Table.Th>Client</Table.Th>
                    <Table.Th>Type</Table.Th>
                    <Table.Th>Duration</Table.Th>
                    <Table.Th>Location</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Notes</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {completedSessions.map((session) => (
                    <Table.Tr key={session.id}>
                      <Table.Td>
                        <Stack gap={2}>
                          <Text fw={500}>{session.date}</Text>
                          <Text size="sm" c="dimmed">{session.time}</Text>
                        </Stack>
                      </Table.Td>
                      <Table.Td>{session.client}</Table.Td>
                      <Table.Td>{session.type}</Table.Td>
                      <Table.Td>{session.duration}</Table.Td>
                      <Table.Td>
                        <Badge variant="outline">{session.location}</Badge>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          size="sm"
                          variant="light"
                          color={getStatusColor(session.status)}
                          leftSection={getStatusIcon(session.status)}
                        >
                          {session.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" lineClamp={1}>{session.notes || '-'}</Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Sessions;