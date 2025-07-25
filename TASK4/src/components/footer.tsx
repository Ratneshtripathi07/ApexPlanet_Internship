import { CodeXml } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeXml className="h-5 w-5 text-primary" />
            <span className="font-bold font-headline text-sm">FolioForge</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FolioForge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
