/**
 * Utility function to send text or form data to WhatsApp
 */

/**
 * Format form data as a readable text message
 */
export const formatFormData = (formData: Record<string, any>): string => {
  let message = "📝 Form Submission:\n\n";
  
  Object.entries(formData).forEach(([key, value]) => {
    // Format the key for better readability
    const formattedKey = key
      .replace(/([A-Z])/g, ' $1') // Insert space before capital letters
      .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
      .replace(/[_-]/g, ' '); // Replace underscores and hyphens with spaces
    
    // Handle different types of values
    let formattedValue = '';
    if (value === null || value === undefined) {
      formattedValue = 'Not provided';
    } else if (typeof value === 'boolean') {
      formattedValue = value ? 'Yes' : 'No';
    } else if (Array.isArray(value)) {
      formattedValue = value.join(', ');
    } else if (typeof value === 'object' && value instanceof Date) {
      formattedValue = value.toLocaleString();
    } else if (typeof value === 'object') {
      formattedValue = JSON.stringify(value);
    } else {
      formattedValue = String(value);
    }
    
    message += `*${formattedKey}*: ${formattedValue}\n`;
  });
  
  message += "\n✅ Sent from our website";
  
  return message;
};

/**
 * Send text to WhatsApp
 */
export const sendToWhatsApp = (
  text: string,
  phoneNumber: string = "1234567890" // Default phone number, replace with your actual number
): void => {
  // Encode the text for a URL
  const encodedText = encodeURIComponent(text);
  
  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
  
  // Open WhatsApp in a new tab
  window.open(whatsappURL, '_blank');
};

/**
 * Send form data to WhatsApp
 */
export const sendFormToWhatsApp = (
  formData: Record<string, any>,
  phoneNumber: string = "1234567890" // Default phone number, replace with your actual number
): void => {
  const formattedMessage = formatFormData(formData);
  sendToWhatsApp(formattedMessage, phoneNumber);
};

/**
 * Extract text content from a webpage section
 */
export const extractTextContent = (element: HTMLElement): string => {
  if (!element) return '';
  
  // Get all text nodes from the element and its descendants
  const text = element.innerText || element.textContent || '';
  
  // Clean up the text (remove extra whitespace)
  return text.replace(/\s+/g, ' ').trim();
};

/**
 * Send webpage content to WhatsApp
 */
export const sendPageContentToWhatsApp = (
  selector: string = 'main', // Default to main content
  phoneNumber: string = "1234567890" // Default phone number
): void => {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    console.error(`Element with selector "${selector}" not found`);
    return;
  }
  
  const pageContent = extractTextContent(element);
  const pageTitle = document.title;
  
  const message = `📄 *${pageTitle}*\n\n${pageContent}\n\n✅ Shared from our website`;
  sendToWhatsApp(message, phoneNumber);
};
