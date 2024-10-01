import Link from 'next/link';
import { Mail, Twitter, LinkedinIcon } from 'lucide-react';
import { AtSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      name: 'Email',
      value: 'garamhoon@gmail.com',
      href: 'mailto:garamhoon@gmail.com',
    },
    {
      icon: <AtSign className="h-6 w-6" />,
      name: 'Threads',
      value: '@garamhoon',
      href: 'https://www.threads.net/@garamhoon',
    },
    {
      icon: <LinkedinIcon className="h-6 w-6" />,
      name: 'LinkedIn',
      value: '정명훈',
      href: 'https://www.linkedin.com/in/m-h-jung/',
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: 'X (Twitter)',
      value: '@garamhoon',
      href: 'https://twitter.com/garamhoon',
    },
  ];

  return (
    <section className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Contact Me</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>다음 방법들 중 편하신 방법으로 연락 주시기 바랍니다:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center space-x-4 rounded-lg border p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {method.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{method.name}</p>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
                <Button asChild variant="secondary">
                  <Link
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Contact via ${method.name}`}
                  >
                    Connect
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
