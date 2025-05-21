"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Globe, Share2, Smartphone } from 'lucide-react';
import { WhatsAppShare } from '@/components/whatsapp-share';

interface OptionsPanelProps {
  className?: string;
}

export function OptionsPanel({ className }: OptionsPanelProps) {
  const { theme, setTheme } = useTheme();
  const [whatsappNumber, setWhatsappNumber] = useState('1234567890'); // Replace with your actual WhatsApp number
  const [activeTab, setActiveTab] = useState('general');

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Options</CardTitle>
        <CardDescription>
          Customize your experience with these settings.
        </CardDescription>
      </CardHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="display">Display</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
        </TabsList>

        {/* General Tab */}
        <TabsContent value="general">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-1">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label htmlFor="notifications">Notifications</Label>
              <Select defaultValue="all">
                <SelectTrigger id="notifications">
                  <SelectValue placeholder="Notification preferences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Notifications</SelectItem>
                  <SelectItem value="important">Important Only</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-update">Auto Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Receive automatic content updates
                </p>
              </div>
              <Switch id="auto-update" defaultChecked />
            </div>
          </CardContent>
        </TabsContent>

        {/* Display Tab */}
        <TabsContent value="display">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-1">
              <Label>Theme Preference</Label>
              <div className="flex flex-col gap-4 pt-2">
                <div 
                  className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition-colors ${theme === 'light' ? 'bg-accent' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5" />
                    <span>Light</span>
                  </div>
                  {theme === 'light' && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                </div>
                
                <div 
                  className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition-colors ${theme === 'dark' ? 'bg-accent' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="flex items-center gap-2">
                    <Moon className="h-5 w-5" />
                    <span>Dark</span>
                  </div>
                  {theme === 'dark' && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                </div>
                
                <div 
                  className={`flex items-center justify-between p-3 rounded-md border cursor-pointer transition-colors ${theme === 'system' ? 'bg-accent' : ''}`}
                  onClick={() => setTheme('system')}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    <span>System</span>
                  </div>
                  {theme === 'system' && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reduce-motion">Reduce Motion</Label>
                <p className="text-sm text-muted-foreground">
                  Minimize animations
                </p>
              </div>
              <Switch id="reduce-motion" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reduce-data">Reduce Data Usage</Label>
                <p className="text-sm text-muted-foreground">
                  Load lower-quality images
                </p>
              </div>
              <Switch id="reduce-data" />
            </div>
          </CardContent>
        </TabsContent>

        {/* Sharing Tab */}
        <TabsContent value="sharing">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
              <div className="flex gap-2">
                <Input 
                  id="whatsapp-number" 
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="WhatsApp number for sharing"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                This number will be used when sharing content via WhatsApp
              </p>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Share Options</Label>
              <div className="flex flex-wrap gap-2 pt-2">
                <WhatsAppShare 
                  phoneNumber={whatsappNumber}
                  buttonText="Share to WhatsApp" 
                  buttonVariant="outline"
                  buttonSize="default"
                  buttonIcon={true}
                />
                
                <Button variant="outline" size="default">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share via Email
                </Button>
                
                <Button variant="outline" size="default">
                  <Smartphone className="w-4 h-4 mr-2" />
                  SMS
                </Button>
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
