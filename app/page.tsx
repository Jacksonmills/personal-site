import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Github, Twitter } from 'lucide-react';
import Image from 'next/image';

import MotionShape from '@/components/MotionShape';

interface GithubProfileResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string | null;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

async function GithubProfile({ username = 'vercel' }: { username?: string }) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const profile: GithubProfileResponse = await res.json();

  if (!res.ok) {
    return <p>Failed to load GitHub profile</p>;
  }

  return (
    <div className="flex w-full items-center gap-4 rounded border bg-border/20 px-8 py-6">
      <Image
        src={profile.avatar_url}
        alt="Vercel Logo"
        width={84}
        height={84}
        className="rounded-full"
      />
      <div className="grid gap-2">
        <h2 className="font-semibold">
          {profile.name}{' '}
          <span className="text-muted-foreground">(Jackson Eroe Mills)</span>
        </h2>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Visit on GitHub{' '}
                  <span className="text-muted-foreground">{profile.login}</span>
                </p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://twitter.com/${profile.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={16} />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Follow on Twitter{' '}
                  <span className="text-muted-foreground">
                    {profile.twitter_username}
                  </span>
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="dark relative grid h-full w-full place-content-center bg-background text-foreground">
      <div className="flex flex-col gap-12">
        <Image
          src="/shape-3.svg"
          alt=""
          width={283}
          height={283}
          className="motion-safe:animate-spin-slow"
        />
        <Image
          src="/shape-1.svg"
          alt=""
          width={283}
          height={283}
          className="motion-safe:animate-spin-slow delay-100"
        />
        <Image
          src="/shape-2.svg"
          alt=""
          width={283}
          height={283}
          className="motion-safe:animate-spin-slow delay-200"
        />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
        <GithubProfile username="jacksonmills" />
      </div>
      <MotionShape
        className="left-12 top-12"
        imageComp={
          <Image
            src="/shape-3.svg"
            alt=""
            width={283}
            height={283}
            className="motion-safe:animate-spin-slow"
          />
        }
      />

      <MotionShape
        className="left-12 top-3/4"
        imageComp={
          <Image
            src="/shape-1.svg"
            alt=""
            width={283}
            height={283}
            className="motion-safe:animate-spin-slow delay-75"
          />
        }
      />

      <MotionShape
        className="right-16 top-1/4"
        imageComp={
          <Image
            src="/shape-2.svg"
            alt=""
            width={283}
            height={283}
            className="motion-safe:animate-spin-slow delay-100"
          />
        }
      />
    </main>
  );
}
