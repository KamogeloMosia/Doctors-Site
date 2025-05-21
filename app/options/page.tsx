import React from 'react';
import { WhatsAppShare } from '@/components/whatsapp-share';
import { ThemeOptions } from '@/components/theme-options';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Settings, Palette, Share2 } from 'lucide-react';

export default function OptionsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Options & Preferences</h1>
          <p className="text-muted-foreground">
            Customize your experience and manage your settings.
          </p>
        </div>
        
        <Tabs defaultValue="theme" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="theme" className="flex items-center gap-2">
              <Palette className="h-4 w-4" /> Theme
            </TabsTrigger>
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings className="h-4 w-4" /> General
            </TabsTrigger>
            <TabsTrigger value="sharing" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Sharing
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme">
            <ThemeOptions />
          </TabsContent>
          
          <TabsContent value="general">
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
              <p className="text-muted-foreground mb-6">
                Configure general application settings and preferences.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-md">
                  <p className="text-sm italic">General settings will be available in a future update.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sharing">
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              <h2 className="text-2xl font-semibold mb-4">Share Content</h2>
              <p className="text-muted-foreground mb-6">
                Use the buttons below to share page content or send form submissions via WhatsApp.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2 mb-6">
                <WhatsAppShare 
                  buttonText="Share This Page" 
                  buttonVariant="default"
                  buttonSize="lg"
                  buttonIcon={true}
                />
                
                <WhatsAppShare 
                  buttonText="Share Form Data" 
                  buttonVariant="outline"
                  buttonSize="lg"
                  buttonIcon={true}
                />
              </div>
              
              <Separator className="my-6" />
              
              <div className="bg-muted p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2">About WhatsApp Integration</h3>
                <p className="text-sm">
                  This feature allows you to easily share webpage content or form submissions via WhatsApp.
                  When you click the share button, you can customize the message before sending.
                  All communication happens directly through the WhatsApp API with no data stored on our servers.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
