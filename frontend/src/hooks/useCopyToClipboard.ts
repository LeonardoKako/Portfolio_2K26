import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from './useTranslation';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const { t } = useTranslation();

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      toast.error(t.contact.errorCopy);
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success(t.contact.copied);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      toast.error(t.contact.errorCopy);
      return false;
    }
  };

  return { copiedText, copy };
};
