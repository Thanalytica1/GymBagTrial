import { Card, Grid, Group, Text, Title, SimpleGrid, Tabs, Table, Alert, Badge, Stack, RingProgress, ThemeIcon, Paper, Button } from '@mantine/core';
import { IconTrendingUp, IconUsers, IconCalendar, IconCreditCard, IconAlertCircle, IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const kpiData = [
  {
    title: 'Monthly Revenue',
    value: '$8,450',
    change: '+12.5%',
    trend: 'up',
    icon: IconCreditCard,
    color: 'green'
  },
  {
    title: 'Active Clients',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: IconUsers,
    color: 'blue'
  },
  {
    title: 'Sessions This Week',
    value: '42',
    change: '-5%',
    trend: 'down',
    icon: IconCalendar,
    color: 'violet'
  },
  {
    title: 'Retention Rate',
    value: '85%',
    change: '+2%',
    trend: 'up',
    icon: IconTrendingUp,
    color: 'teal'
  }
];

const upcomingSessions = [
  { time: '9:00 AM', client: 'Sarah Johnson', type: 'Strength Training', status: 'confirmed' },
  { time: '10:30 AM', client: 'Mike Chen', type: 'HIIT', status: 'confirmed' },
  { time: '12:00 PM', client: 'Emma Wilson', type: 'Yoga', status: 'pending' },
  { time: '2:00 PM', client: 'James Brown', type: 'Personal Training', status: 'confirmed' },
  { time: '3:30 PM', client: 'Lisa Garcia', type: 'Nutrition Consult', status: 'confirmed' }
];

function Dashboard() {
  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Dashboard</Title>
        <Tabs defaultValue="7d" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="7d">7 days</Tabs.Tab>
            <Tabs.Tab value="30d">30 days</Tabs.Tab>
            <Tabs.Tab value="90d">90 days</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Group>

      <Alert icon={<IconAlertCircle size={20} />} color="orange" variant="light">
        <Group justify="space-between">
          <Text>You have 3 package renewals due this week</Text>
          <Button size="xs" variant="subtle">View Details</Button>
        </Group>
      </Alert>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {kpiData.map((kpi) => (
          <Card key={kpi.title} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="xs">
              <Text size="sm" c="dimmed" fw={500}>{kpi.title}</Text>
              <ThemeIcon size="sm" variant="light" color={kpi.color}>
                <kpi.icon size={16} />
              </ThemeIcon>
            </Group>

            <Group align="end" gap="xs" mb="xs">
              <Text size="xl" fw={700}>{kpi.value}</Text>
              <Badge
                size="sm"
                variant="light"
                color={kpi.trend === 'up' ? 'green' : 'red'}
                leftSection={kpi.trend === 'up' ? <IconArrowUpRight size={12} /> : <IconArrowDownRight size={12} />}
              >
                {kpi.change}
              </Badge>
            </Group>
          </Card>
        ))}
      </SimpleGrid>

      <Grid gutter="lg">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Title order={4}>Today's Sessions</Title>
              <Badge variant="dot" color="green">5 scheduled</Badge>
            </Group>

            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Time</Table.Th>
                  <Table.Th>Client</Table.Th>
                  <Table.Th>Type</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {upcomingSessions.map((session) => (
                  <Table.Tr key={session.time}>
                    <Table.Td fw={500}>{session.time}</Table.Td>
                    <Table.Td>{session.client}</Table.Td>
                    <Table.Td>{session.type}</Table.Td>
                    <Table.Td>
                      <Badge
                        size="sm"
                        variant="light"
                        color={session.status === 'confirmed' ? 'green' : 'yellow'}
                      >
                        {session.status}
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4} mb="md">Weekly Utilization</Title>

            <Group justify="center" mb="md">
              <RingProgress
                size={140}
                thickness={14}
                sections={[
                  { value: 75, color: 'blue' },
                  { value: 25, color: 'gray.2' }
                ]}
                label={
                  <Text size="xl" fw={700} ta="center">
                    75%
                  </Text>
                }
              />
            </Group>

            <Stack gap="xs">
              <Group justify="space-between">
                <Text size="sm" c="dimmed">Booked Hours</Text>
                <Text size="sm" fw={500}>30 / 40</Text>
              </Group>
              <Group justify="space-between">
                <Text size="sm" c="dimmed">Peak Time</Text>
                <Text size="sm" fw={500}>9-11 AM</Text>
              </Group>
              <Group justify="space-between">
                <Text size="sm" c="dimmed">Cancellations</Text>
                <Text size="sm" fw={500}>2 this week</Text>
              </Group>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default Dashboard;