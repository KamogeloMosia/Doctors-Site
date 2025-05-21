"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { MessageSquare, Share2 } from 'lucide-react';
import { sendToWhatsApp, sendPageContentToWhatsApp } from '@/app/utils/whatsapp';

interface WhatsAppShareProps {
  phoneNumber?: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
  buttonIcon?: boolean;
  selector?: string;
}

export function WhatsAppShare({
  phoneNumber = "1234567890", // Replace with your actual WhatsApp number
  buttonText = "Share to WhatsApp",
  buttonVariant = "default",
  buttonSize = "default",
  buttonIcon = true,
  selector = "main"
}: WhatsAppShareProps) {
  const [open, setOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [customPhoneNumber, setCustomPhoneNumber] = useState(phoneNumber);

  const handleSharePage = () => {
    sendPageContentToWhatsApp(selector, customPhoneNumber);
    setOpen(false);
  };

  const handleShareCustomMessage = () => {
    if (customMessage.trim()) {
      sendToWhatsApp(customMessage, customPhoneNumber);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant as any} size={buttonSize as any}>
          {buttonIcon && <Share2 className="w-4 h-4 mr-2" />}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share to WhatsApp</DialogTitle>
          <DialogDescription>
            Share this page or a custom message via WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="WhatsApp number"
              value={customPhoneNumber}
              onChange={(e) => setCustomPhoneNumber(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Message
            </Label>
            <Input
              id="message"
              placeholder="Optional custom message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex gap-2">
          <Button onClick={handleSharePage} className="flex-1">
            <MessageSquare className="w-4 h-4 mr-2" />
            Share Page Content
          </Button>
          <Button onClick={handleShareCustomMessage} className="flex-1">
            <Share2 className="w-4 h-4 mr-2" />
            Send Custom Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
