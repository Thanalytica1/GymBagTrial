import { Card, Group, Title, SimpleGrid, Stack, Text, RingProgress, Paper, Button, Select, Badge } from '@mantine/core';
import { IconDownload, IconTrendingUp, IconUsers, IconCreditCard, IconCalendar } from '@tabler/icons-react';

function Analytics() {
  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Analytics</Title>
        <Group>
          <Select
            placeholder="Time period"
            defaultValue="30d"
            data={[
              { value: '7d', label: 'Last 7 days' },
              { value: '30d', label: 'Last 30 days' },
              { value: '90d', label: 'Last 90 days' },
              { value: 'ytd', label: 'Year to date' }
            ]}
          />
          <Button leftSection={<IconDownload size={16} />} variant="light">
            Export Report
          </Button>
        </Group>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text size="sm" c="dimmed" fw={500}>Revenue Growth</Text>
            <IconTrendingUp size={20} color="green" />
          </Group>
          <Text size="xl" fw={700}>+24.5%</Text>
          <Text size="xs" c="dimmed" mt="xs">vs previous period</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text size="sm" c="dimmed" fw={500}>Client Retention</Text>
            <IconUsers size={20} color="blue" />
          </Group>
          <Text size="xl" fw={700}>85%</Text>
          <Text size="xs" c="dimmed" mt="xs">24 of 28 retained</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text size="sm" c="dimmed" fw={500}>Avg Session Value</Text>
            <IconCreditCard size={20} color="violet" />
          </Group>
          <Text size="xl" fw={700}>$125</Text>
          <Text size="xs" c="dimmed" mt="xs">+$15 from last month</Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="space-between" mb="xs">
            <Text size="sm" c="dimmed" fw={500}>Session Completion</Text>
            <IconCalendar size={20} color="teal" />
          </Group>
          <Text size="xl" fw={700}>92%</Text>
          <Text size="xs" c="dimmed" mt="xs">138 of 150 completed</Text>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Title order={4} mb="md">Package Distribution</Title>
          <Group justify="center" mb="md">
            <RingProgress
              size={180}
              thickness={20}
              sections={[
                { value: 40, color: 'blue', tooltip: 'Basic - 10 clients' },
                { value: 35, color: 'violet', tooltip: 'Premium - 9 clients' },
                { value: 25, color: 'teal', tooltip: 'Elite - 5 clients' }
              ]}
            />
          </Group>
          <Stack gap="xs">
            <Group justify="space-between">
              <Group gap="xs">
                <Badge color="blue" variant="filled" size="xs" />
                <Text size="sm">Basic Package</Text>
              </Group>
              <Text size="sm" fw={500}>40%</Text>
            </Group>
            <Group justify="space-between">
              <Group gap="xs">
                <Badge color="violet" variant="filled" size="xs" />
                <Text size="sm">Premium Package</Text>
              </Group>
              <Text size="sm" fw={500}>35%</Text>
            </Group>
            <Group justify="space-between">
              <Group gap="xs">
                <Badge color="teal" variant="filled" size="xs" />
                <Text size="sm">Elite Package</Text>
              </Group>
              <Text size="sm" fw={500}>25%</Text>
            </Group>
          </Stack>
        </Paper>

        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Title order={4} mb="md">Time Slot Utilization</Title>
          <Stack gap="xs">
            <div>
              <Group justify="space-between" mb={4}>
                <Text size="sm">Morning (6-12)</Text>
                <Text size="sm" fw={500}>85%</Text>
              </Group>
              <div style={{ background: 'var(--mantine-color-gray-2)', borderRadius: '4px', height: '8px' }}>
                <div style={{ width: '85%', background: 'var(--mantine-color-blue-6)', borderRadius: '4px', height: '100%' }} />
              </div>
            </div>
            <div>
              <Group justify="space-between" mb={4}>
                <Text size="sm">Afternoon (12-6)</Text>
                <Text size="sm" fw={500}>65%</Text>
              </Group>
              <div style={{ background: 'var(--mantine-color-gray-2)', borderRadius: '4px', height: '8px' }}>
                <div style={{ width: '65%', background: 'var(--mantine-color-violet-6)', borderRadius: '4px', height: '100%' }} />
              </div>
            </div>
            <div>
              <Group justify="space-between" mb={4}>
                <Text size="sm">Evening (6-10)</Text>
                <Text size="sm" fw={500}>92%</Text>
              </Group>
              <div style={{ background: 'var(--mantine-color-gray-2)', borderRadius: '4px', height: '8px' }}>
                <div style={{ width: '92%', background: 'var(--mantine-color-teal-6)', borderRadius: '4px', height: '100%' }} />
              </div>
            </div>
          </Stack>
        </Paper>
      </SimpleGrid>

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Title order={4} mb="md">Top Performers</Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Card>
            <Text size="sm" c="dimmed" mb="xs">Most Sessions</Text>
            <Text fw={600}>Sarah Johnson</Text>
            <Text size="sm" c="dimmed">18 sessions</Text>
          </Card>
          <Card>
            <Text size="sm" c="dimmed" mb="xs">Highest Revenue</Text>
            <Text fw={600}>James Brown</Text>
            <Text size="sm" c="dimmed">$2,400</Text>
          </Card>
          <Card>
            <Text size="sm" c="dimmed" mb="xs">Best Retention</Text>
            <Text fw={600}>Mike Chen</Text>
            <Text size="sm" c="dimmed">12 months</Text>
          </Card>
        </SimpleGrid>
      </Paper>
    </Stack>
  );
}

export default Analytics;