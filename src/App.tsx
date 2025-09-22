import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MantineProvider, AppShell, Group, Burger, Text, Stack, NavLink, Divider, ActionIcon, Tooltip, Badge, ScrollArea, useMantineColorScheme, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import {
  IconDashboard,
  IconUsers,
  IconCalendar,
  IconCreditCard,
  IconUserPlus,
  IconChartBar,
  IconSettings,
  IconSun,
  IconMoon,
  IconSearch,
  IconBell,
  IconPlus
} from '@tabler/icons-react';

import Dashboard from './app/routes/dashboard/Dashboard';
import Clients from './app/routes/clients/Clients';
import Sessions from './app/routes/sessions/Sessions';
import Payments from './app/routes/payments/Payments';
import Leads from './app/routes/leads/Leads';
import Analytics from './app/routes/analytics/Analytics';
import Settings from './app/routes/settings/Settings';

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="Toggle color scheme" position="bottom">
      <ActionIcon variant="subtle" onClick={toggleColorScheme} size="lg">
        {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
      </ActionIcon>
    </Tooltip>
  );
}

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState('Dashboard');

  const navigation = [
    { icon: IconDashboard, label: 'Dashboard', path: '/dashboard', badge: null },
    { icon: IconUsers, label: 'Clients', path: '/clients', badge: '24' },
    { icon: IconCalendar, label: 'Sessions', path: '/sessions', badge: '3' },
    { icon: IconCreditCard, label: 'Payments', path: '/payments', badge: null },
    { icon: IconUserPlus, label: 'Leads', path: '/leads', badge: '5' },
    { icon: IconChartBar, label: 'Analytics', path: '/analytics', badge: null },
    { icon: IconSettings, label: 'Settings', path: '/settings', badge: null },
  ];

  return (
    <MantineProvider defaultColorScheme="dark">
      <ModalsProvider>
        <Notifications position="top-right" />
        <BrowserRouter>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 250,
              breakpoint: 'sm',
              collapsed: { mobile: !opened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md" justify="space-between">
                <Group>
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                  />
                  <Group gap={8} align="center">
                    <Image
                      src="/GymBagLogo copy 2.png"
                      alt="GymBag"
                      width={35}
                      height={35}
                      fit="contain"
                    />
                    <Text size="xl" fw={700}>GymBag</Text>
                  </Group>
                </Group>

                <Group>
                  <Tooltip label="Search (⌘K)">
                    <ActionIcon variant="subtle" size="lg">
                      <IconSearch size={20} />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label="Quick add">
                    <ActionIcon variant="filled" size="lg">
                      <IconPlus size={20} />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label="Notifications">
                    <ActionIcon variant="subtle" size="lg">
                      <IconBell size={20} />
                    </ActionIcon>
                  </Tooltip>

                  <ColorSchemeToggle />
                </Group>
              </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <AppShell.Section grow component={ScrollArea}>
                <Stack gap={4}>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.label}
                      active={item.label === active}
                      label={item.label}
                      leftSection={<item.icon size={20} stroke={1.5} />}
                      rightSection={item.badge && (
                        <Badge size="xs" variant="filled" color="red">
                          {item.badge}
                        </Badge>
                      )}
                      onClick={() => {
                        setActive(item.label);
                        window.location.href = item.path;
                      }}
                    />
                  ))}
                </Stack>
              </AppShell.Section>

              <Divider my="md" />

              <AppShell.Section>
                <Stack gap={4}>
                  <Text size="xs" c="dimmed" fw={500} px="sm" mb={4}>
                    QUICK ACTIONS
                  </Text>
                  <NavLink
                    label="Add Session"
                    leftSection={<IconPlus size={18} />}
                    variant="subtle"
                  />
                  <NavLink
                    label="Log Payment"
                    leftSection={<IconCreditCard size={18} />}
                    variant="subtle"
                  />
                  <NavLink
                    label="Add Client"
                    leftSection={<IconUserPlus size={18} />}
                    variant="subtle"
                  />
                </Stack>
              </AppShell.Section>
            </AppShell.Navbar>

            <AppShell.Main>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </AppShell.Main>
          </AppShell>
        </BrowserRouter>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;