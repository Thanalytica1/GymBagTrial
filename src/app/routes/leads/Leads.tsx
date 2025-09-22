import { useState } from 'react';
import { Card, Group, Title, Button, Badge, Stack, Text, SegmentedControl, Avatar, ActionIcon, Popover, SimpleGrid } from '@mantine/core';
import { IconPlus, IconPhone, IconMail, IconMessage, IconCalendar } from '@tabler/icons-react';
import { DatePickerInput } from '@mantine/dates';

const leadsData = [
  {
    id: 1,
    name: 'Alex Thompson',
    email: 'alex.t@email.com',
    phone: '(555) 111-2222',
    source: 'Website',
    stage: 'New',
    lastContact: '2024-01-08',
    nextAction: '2024-01-10',
    interest: 'Weight Loss'
  },
  {
    id: 2,
    name: 'Rachel Green',
    email: 'rachel.g@email.com',
    phone: '(555) 333-4444',
    source: 'Referral',
    stage: 'Contacted',
    lastContact: '2024-01-07',
    nextAction: '2024-01-09',
    interest: 'Muscle Building'
  },
  {
    id: 3,
    name: 'David Kim',
    email: 'david.k@email.com',
    phone: '(555) 555-6666',
    source: 'Instagram',
    stage: 'Trial',
    lastContact: '2024-01-06',
    nextAction: '2024-01-11',
    interest: 'General Fitness'
  },
  {
    id: 4,
    name: 'Monica Bing',
    email: 'monica.b@email.com',
    phone: '(555) 777-8888',
    source: 'Website',
    stage: 'New',
    lastContact: '2024-01-09',
    nextAction: '2024-01-10',
    interest: 'Nutrition'
  },
  {
    id: 5,
    name: 'Ross Geller',
    email: 'ross.g@email.com',
    phone: '(555) 999-0000',
    source: 'Walk-in',
    stage: 'Negotiating',
    lastContact: '2024-01-05',
    nextAction: '2024-01-10',
    interest: 'Athletic Performance'
  }
];

function Leads() {
  const [filter, setFilter] = useState('All');

  const filteredLeads = filter === 'All' 
    ? leadsData 
    : leadsData.filter(lead => lead.stage === filter);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'New': return 'blue';
      case 'Contacted': return 'yellow';
      case 'Trial': return 'violet';
      case 'Negotiating': return 'orange';
      default: return 'gray';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Stack gap="lg">
      <Group justify="space-between">
        <Title order={2}>Leads</Title>
        <Button leftSection={<IconPlus size={16} />}>
          Add Lead
        </Button>
      </Group>

      <SegmentedControl
        value={filter}
        onChange={setFilter}
        data={[
          { label: 'All (5)', value: 'All' },
          { label: 'New (2)', value: 'New' },
          { label: 'Contacted (1)', value: 'Contacted' },
          { label: 'Trial (1)', value: 'Trial' },
          { label: 'Negotiating (1)', value: 'Negotiating' }
        ]}
      />

      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
        {filteredLeads.map((lead) => (
          <Card key={lead.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Group gap="sm">
                <Avatar size="md" radius="xl" color="blue">
                  {getInitials(lead.name)}
                </Avatar>
                <div>
                  <Text fw={500}>{lead.name}</Text>
                  <Badge size="sm" variant="light" color={getStageColor(lead.stage)}>
                    {lead.stage}
                  </Badge>
                </div>
              </Group>
              <Badge variant="outline" size="sm">{lead.source}</Badge>
            </Group>

            <Stack gap="xs" mb="md">
              <Group gap={4}>
                <IconMail size={14} />
                <Text size="sm">{lead.email}</Text>
              </Group>
              <Group gap={4}>
                <IconPhone size={14} />
                <Text size="sm">{lead.phone}</Text>
              </Group>
              <Text size="sm" c="dimmed">Interest: {lead.interest}</Text>
            </Stack>

            <Group justify="space-between">
              <Text size="xs" c="dimmed">
                Last: {lead.lastContact}
              </Text>
              <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <Badge
                    variant="light"
                    color="green"
                    style={{ cursor: 'pointer' }}
                    leftSection={<IconCalendar size={12} />}
                  >
                    {lead.nextAction}
                  </Badge>
                </Popover.Target>
                <Popover.Dropdown>
                  <Stack gap="xs">
                    <Text size="sm" fw={500}>Update Next Action</Text>
                    <DatePickerInput
                      placeholder="Select date"
                      size="xs"
                    />
                    <Button size="xs">Save</Button>
                  </Stack>
                </Popover.Dropdown>
              </Popover>
            </Group>

            <Group gap="xs" mt="md">
              <ActionIcon variant="light" size="lg">
                <IconPhone size={16} />
              </ActionIcon>
              <ActionIcon variant="light" size="lg">
                <IconMail size={16} />
              </ActionIcon>
              <ActionIcon variant="light" size="lg">
                <IconMessage size={16} />
              </ActionIcon>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}

export default Leads;