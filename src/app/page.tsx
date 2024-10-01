import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to garamdale</h1>
        <p className="mb-1 text-lg">저는 여행사에서 C#으로 웹 개발을 하고 있어요.</p>
        <p className="mb-3 text-lg">인디해커와 솔로프리너에 관심이 있어요.</p>
        <p className="mb-1 text-xl">인디해커가 되기 위해 사이드 프로젝트를 진행하고 있어요.</p>
        <p className="mb-8 text-lg">많은 관심 부탁드려요!</p>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
      <section>
        <h2 className="mb-8 text-3xl font-semibold">월간 사이드 프로젝트</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="flex justify-center mt-6">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="object-cover max-h-[200px] rounded-lg"
                  />
                ) : (
                  <div className="w-[200px] h-[200px]"></div>
                )}
              </div>
              <CardHeader>
                <CardTitle>
                  {project.project_date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}:{' '}
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-end sm:justify-end">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={`/projects/${project.id}`}>자세히 보기</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
