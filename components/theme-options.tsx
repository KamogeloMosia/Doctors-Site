"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Moon, Sun, Globe, Palette } from 'lucide-react';

export function ThemeOptions() {
  const { theme, setTheme } = useTheme();
  
  const themes = [
    { id: 'professional-light', name: 'Professional Light', color: '#8b5cf6', group: 'light' },
    { id: 'professional-dark', name: 'Professional Dark', color: '#06b6d4', group: 'dark' },
    { id: 'calm-light', name: 'Calm Light', color: '#0ea5e9', group: 'light' },
    { id: 'calm-dark', name: 'Calm Dark', color: '#38bdf8', group: 'dark' },
    { id: 'vibrant-light', name: 'Vibrant Light', color: '#ec4899', group: 'light' },
    { id: 'vibrant-dark', name: 'Vibrant Dark', color: '#d946ef', group: 'dark' },
    { id: 'high-contrast-light', name: 'High Contrast Light', color: '#000000', group: 'light' },
    { id: 'high-contrast-dark', name: 'High Contrast Dark', color: '#ffffff', group: 'dark' },
    { id: 'nature-light', name: 'Nature Light', color: '#16a34a', group: 'light' },
    { id: 'nature-dark', name: 'Nature Dark', color: '#22c55e', group: 'dark' },
  ];
  
  const palettes = [
    { id: 'softMedical', name: 'Soft Medical', light: '#0891b2', dark: '#06b6d4' },
    { id: 'boldHealthTech', name: 'Bold HealthTech', light: '#047857', dark: '#10b981' },
    { id: 'neonPulse', name: 'Neon Pulse', light: '#06b6d4', dark: '#0ea5e9' },
    { id: 'vitalBloom', name: 'Vital Bloom', light: '#10b981', dark: '#34d399' },
    { id: 'spectrumCare', name: 'Spectrum Care', light: '#3b82f6', dark: '#8b5cf6' },
    { id: 'carbonClarity', name: 'Carbon Clarity', light: '#06b6d4', dark: '#22d3ee' },
    { id: 'sunsetWellness', name: 'Sunset Wellness', light: '#fb923c', dark: '#fbbf24' },
    { id: 'clinicalAurora', name: 'Clinical Aurora', light: '#5eead4', dark: '#7dd3fc' },
  ];
  
  // Set the default tab based on current theme
  const getDefaultTab = () => {
    if (theme === 'light' || theme === 'dark' || theme === 'system') {
      return 'mode';
    }
    if (theme?.includes('light') || theme?.includes('dark')) {
      return 'theme';
    }
    return 'palette';
  };
  
  const [activeTab, setActiveTab] = React.useState(getDefaultTab());
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Palette className="h-5 w-5 mr-2" /> Theme Settings
        </CardTitle>
        <CardDescription>
          Customize the appearance of the application
        </CardDescription>
      </CardHeader>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="mode">Mode</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
          <TabsTrigger value="palette">Palette</TabsTrigger>
        </TabsList>
        
        {/* Mode Tab */}
        <TabsContent value="mode">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-1">
              <Label>Color Mode</Label>
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
          </CardContent>
        </TabsContent>
        
        {/* Theme Tab */}
        <TabsContent value="theme">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <Label>Light Themes</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {themes.filter(t => t.group === 'light').map(theme => (
                  <div
                    key={theme.id}
                    className="flex items-center p-3 rounded-md border cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => setTheme(theme.id)}
                  >
                    <div 
                      className="w-6 h-6 rounded-full mr-3" 
                      style={{ backgroundColor: theme.color }}
                    />
                    <span>{theme.name}</span>
                  </div>
                ))}
              </div>
              
              <Label className="mt-6">Dark Themes</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {themes.filter(t => t.group === 'dark').map(theme => (
                  <div
                    key={theme.id}
                    className="flex items-center p-3 rounded-md border cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => setTheme(theme.id)}
                  >
                    <div 
                      className="w-6 h-6 rounded-full mr-3" 
                      style={{ backgroundColor: theme.color }}
                    />
                    <span>{theme.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </TabsContent>
        
        {/* Palette Tab */}
        <TabsContent value="palette">
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-4">
              <Label>Color Palettes</Label>
              <div className="grid grid-cols-1 gap-3">
                {palettes.map(palette => (
                  <div
                    key={palette.id}
                    className="flex items-center p-3 rounded-md border cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => {
                      document.documentElement.classList.remove(...palettes.map(p => `palette-${p.id}`));
                      document.documentElement.classList.add(`palette-${palette.id}`);
                    }}
                  >
                    <div className="flex mr-3">
                      <div 
                        className="w-6 h-6 rounded-l-full" 
                        style={{ backgroundColor: palette.light }}
                      />
                      <div 
                        className="w-6 h-6 rounded-r-full" 
                        style={{ backgroundColor: palette.dark }}
                      />
                    </div>
                    <span>{palette.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
