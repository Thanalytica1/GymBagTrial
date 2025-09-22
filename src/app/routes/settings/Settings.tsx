import { Tabs, Stack, Title, Paper, TextInput, Select, Textarea, Switch, Button, Group, NumberInput, Card, Text, Badge, Divider } from '@mantine/core';
import { IconUser, IconPackage, IconLink, IconBell, IconShield } from '@tabler/icons-react';

function Settings() {
  return (
    <Stack gap="lg">
      <Title order={2}>Settings</Title>

      <Tabs defaultValue="profile">
        <Tabs.List>
          <Tabs.Tab value="profile" leftSection={<IconUser size={16} />}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab value="packages" leftSection={<IconPackage size={16} />}>
            Packages
          </Tabs.Tab>
          <Tabs.Tab value="integrations" leftSection={<IconLink size={16} />}>
            Integrations
          </Tabs.Tab>
          <Tabs.Tab value="notifications" leftSection={<IconBell size={16} />}>
            Notifications
          </Tabs.Tab>
          <Tabs.Tab value="security" leftSection={<IconShield size={16} />}>
            Security
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="profile" pt="lg">
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4} mb="lg">Business Information</Title>
            <Stack gap="md">
              <TextInput
                label="Business Name"
                placeholder="Your business name"
                defaultValue="GymBag Personal Training"
              />
              <Group grow>
                <TextInput
                  label="Your Name"
                  placeholder="Your name"
                  defaultValue="John Doe"
                />
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  defaultValue="john@gymbag.com"
                />
              </Group>
              <Group grow>
                <TextInput
                  label="Phone"
                  placeholder="(555) 123-4567"
                  defaultValue="(555) 123-4567"
                />
                <TextInput
                  label="Website"
                  placeholder="www.example.com"
                  defaultValue="www.gymbag.com"
                />
              </Group>
              <Textarea
                label="Business Description"
                placeholder="Describe your services"
                rows={4}
                defaultValue="Professional personal training services specializing in strength training, weight loss, and athletic performance."
              />
              <Group justify="flex-end">
                <Button variant="light">Cancel</Button>
                <Button>Save Changes</Button>
              </Group>
            </Stack>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="packages" pt="lg">
          <Stack gap="lg">
            <Paper shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} mb="lg">Training Packages</Title>
              <Stack gap="md">
                <Card withBorder>
                  <Group justify="space-between" mb="sm">
                    <div>
                      <Text fw={600}>Basic Package</Text>
                      <Text size="sm" c="dimmed">Entry level training</Text>
                    </div>
                    <Badge color="green" variant="light">Active</Badge>
                  </Group>
                  <Group grow>
                    <NumberInput
                      label="Sessions"
                      defaultValue={4}
                      min={1}
                    />
                    <NumberInput
                      label="Price"
                      prefix="$"
                      defaultValue={90}
                      min={0}
                    />
                    <NumberInput
                      label="Duration (days)"
                      defaultValue={30}
                      min={1}
                    />
                  </Group>
                </Card>

                <Card withBorder>
                  <Group justify="space-between" mb="sm">
                    <div>
                      <Text fw={600}>Premium Package</Text>
                      <Text size="sm" c="dimmed">Most popular option</Text>
                    </div>
                    <Badge color="green" variant="light">Active</Badge>
                  </Group>
                  <Group grow>
                    <NumberInput
                      label="Sessions"
                      defaultValue={8}
                      min={1}
                    />
                    <NumberInput
                      label="Price"
                      prefix="$"
                      defaultValue={150}
                      min={0}
                    />
                    <NumberInput
                      label="Duration (days)"
                      defaultValue={30}
                      min={1}
                    />
                  </Group>
                </Card>

                <Card withBorder>
                  <Group justify="space-between" mb="sm">
                    <div>
                      <Text fw={600}>Elite Package</Text>
                      <Text size="sm" c="dimmed">Comprehensive training</Text>
                    </div>
                    <Badge color="green" variant="light">Active</Badge>
                  </Group>
                  <Group grow>
                    <NumberInput
                      label="Sessions"
                      defaultValue={12}
                      min={1}
                    />
                    <NumberInput
                      label="Price"
                      prefix="$"
                      defaultValue={200}
                      min={0}
                    />
                    <NumberInput
                      label="Duration (days)"
                      defaultValue={30}
                      min={1}
                    />
                  </Group>
                </Card>

                <Group justify="flex-end">
                  <Button variant="light">Add Package</Button>
                  <Button>Save All</Button>
                </Group>
              </Stack>
            </Paper>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="integrations" pt="lg">
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4} mb="lg">Connected Services</Title>
            <Stack gap="md">
              <Card withBorder>
                <Group justify="space-between">
                  <div>
                    <Text fw={600}>Google Calendar</Text>
                    <Text size="sm" c="dimmed">Sync your sessions with Google Calendar</Text>
                  </div>
                  <Switch defaultChecked />
                </Group>
              </Card>

              <Card withBorder>
                <Group justify="space-between">
                  <div>
                    <Text fw={600}>Stripe</Text>
                    <Text size="sm" c="dimmed">Process payments online</Text>
                  </div>
                  <Switch />
                </Group>
              </Card>

              <Card withBorder>
                <Group justify="space-between">
                  <div>
                    <Text fw={600}>Mailchimp</Text>
                    <Text size="sm" c="dimmed">Email marketing integration</Text>
                  </div>
                  <Switch />
                </Group>
              </Card>

              <Card withBorder>
                <Group justify="space-between">
                  <div>
                    <Text fw={600}>WhatsApp Business</Text>
                    <Text size="sm" c="dimmed">Send automated reminders</Text>
                  </div>
                  <Switch defaultChecked />
                </Group>
              </Card>
            </Stack>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="notifications" pt="lg">
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4} mb="lg">Notification Preferences</Title>
            <Stack gap="md">
              <Divider label="Email Notifications" />
              <Switch label="Session reminder (24h before)" defaultChecked />
              <Switch label="Package expiring soon" defaultChecked />

              <Divider label="Push Notifications" mt="lg" />
              <Switch label="Upcoming session (1h before)" defaultChecked />
              <Switch label="Payment overdue" defaultChecked />

              <Group justify="flex-end" mt="lg">
                <Button>Save Preferences</Button>
              </Group>
            </Stack>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="security" pt="lg">
          <Paper shadow="sm" p="lg" radius="md" withBorder>
            <Title order={4} mb="lg">Security Settings</Title>
            <Stack gap="md">
              <TextInput
                label="Current Password"
                type="password"
                placeholder="Enter current password"
              />
              <TextInput
                label="New Password"
                type="password"
                placeholder="Enter new password"
              />
              <TextInput
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
              />

              <Divider label="Two-Factor Authentication" mt="lg" />
              <Switch label="Enable two-factor authentication" />

              <Divider label="Session Security" mt="lg" />
              <Select
                label="Auto-logout after"
                defaultValue="30"
                data={[
                  { value: '15', label: '15 minutes' },
                  { value: '30', label: '30 minutes' },
                  { value: '60', label: '1 hour' },
                  { value: 'never', label: 'Never' }
                ]}
              />

              <Group justify="flex-end" mt="lg">
                <Button>Update Security</Button>
              </Group>
            </Stack>
          </Paper>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

export default Settings;