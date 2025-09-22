import { useState } from 'react';
import { Table, Group, Title, Button, Badge, Stack, Paper, Text, Alert, Pagination, Modal, NumberInput, Select, Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconPlus, IconCreditCard, IconAlertCircle, IconCash, IconBrandStripe, IconReceipt } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const paymentsData = [
  {
    id: 'PAY-001',
    date: '2024-01-09',
    client: 'Sarah Johnson',
    amount: 150,
    method: 'Card',
    package: 'Premium',
    status: 'completed'
  },
  {
    id: 'PAY-002',
    date: '2024-01-08',
    client: 'Mike Chen',
    amount: 90,
    method: 'Cash',
    package: 'Basic',
    status: 'completed'
  },
  {
    id: 'PAY-003',
    date: '2024-01-07',
    client: 'Emma Wilson',
    amount: 150,
    method: 'Transfer',
    package: 'Premium',
    status: 'pending'
  },
  {
    id: 'PAY-004',
    date: '2024-01-06',
    client: 'James Brown',
    amount: 200,
    method: 'Card',
    package: 'Elite',
    status: 'completed'
  },
  {
    id: 'PAY-005',
    date: '2024-01-05',
    client: 'Lisa Garcia',
    amount: 90,
    method: 'Cash',
    package: 'Basic',
    status: 'overdue'
  }
];

function Payments() {
  const [opened, { open, close }] = useDisclosure(false);
  const [page, setPage] = useState(1);

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'Card': return <IconCreditCard size={14} />;
      case 'Cash': return <IconCash size={14} />;
      case 'Transfer': return <IconBrandStripe size={14} />;
      default: return <IconReceipt size={14} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'green';
      case 'pending': return 'yellow';
      case 'overdue': return 'red';
      default: return 'gray';
    }
  };

  const totalRevenue = paymentsData
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = paymentsData
    .filter(p => p.status === 'pending' || p.status === 'overdue')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Payments</Title>
        <Button leftSection={<IconPlus size={16} />} onClick={open}>
          Log Payment
        </Button>
      </Group>

      <Group gap="md">
        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Text size="sm" c="dimmed" mb={4}>Total Revenue</Text>
          <Text size="xl" fw={700}>${totalRevenue}</Text>
        </Paper>
        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Text size="sm" c="dimmed" mb={4}>Pending</Text>
          <Text size="xl" fw={700} c="orange">${pendingAmount}</Text>
        </Paper>
      </Group>

      <Alert icon={<IconAlertCircle size={20} />} color="red" variant="light">
        You have 1 overdue payment of $90 from Lisa Garcia
      </Alert>

      <Paper shadow="sm" p="lg" radius="md" withBorder>
        <Table highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Client</Table.Th>
              <Table.Th>Package</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Method</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {paymentsData.map((payment) => (
              <Table.Tr key={payment.id}>
                <Table.Td>
                  <Text size="sm" c="dimmed">{payment.id}</Text>
                </Table.Td>
                <Table.Td>{payment.date}</Table.Td>
                <Table.Td>{payment.client}</Table.Td>
                <Table.Td>
                  <Badge variant="outline">{payment.package}</Badge>
                </Table.Td>
                <Table.Td fw={600}>${payment.amount}</Table.Td>
                <Table.Td>
                  <Badge
                    variant="light"
                    leftSection={getMethodIcon(payment.method)}
                  >
                    {payment.method}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Badge
                    size="sm"
                    variant="filled"
                    color={getStatusColor(payment.status)}
                  >
                    {payment.status}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        <Group justify="center" mt="lg">
          <Pagination total={5} value={page} onChange={setPage} />
        </Group>
      </Paper>

      <Modal opened={opened} onClose={close} title="Log Payment" size="md">
        <Stack gap="md">
          <Select
            label="Client"
            placeholder="Select a client"
            data={['Sarah Johnson', 'Mike Chen', 'Emma Wilson', 'James Brown', 'Lisa Garcia']}
            required
          />
          <Select
            label="Package"
            placeholder="Select package"
            data={['Basic', 'Premium', 'Elite']}
            required
          />
          <NumberInput
            label="Amount"
            placeholder="Enter amount"
            prefix="$"
            required
          />
          <Select
            label="Payment Method"
            placeholder="Select method"
            data={['Cash', 'Card', 'Transfer']}
            required
          />
          <DatePickerInput
            label="Payment Date"
            placeholder="Select date"
            required
          />
          <Textarea
            label="Notes"
            placeholder="Optional notes"
            rows={3}
          />
          <Group justify="flex-end">
            <Button variant="light" onClick={close}>Cancel</Button>
            <Button>Save Payment</Button>
          </Group>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default Payments;