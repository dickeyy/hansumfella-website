"use client";

import { TwitchPlayerNonInteractive } from "react-twitch-embed";
import { Button } from "./ui/button";
import TwitchIcon from "@/public/icons/twitch-icon.svg";
import DiscordIcon from "@/public/icons/discord-icon.svg";
import TwitterIcon from "@/public/icons/twitter-icon.svg";
import InstagramIcon from "@/public/icons/instagram-icon.svg";
import YouTubeIcon from "@/public/icons/youtube-icon.svg";
import TikTokIcon from "@/public/icons/tiktok-icon.svg";

export default function Hero() {
    return (
        <div className="flex min-h-screen w-full flex-1 items-center justify-center gap-12 px-0">
            <div className="flex w-1/2 flex-col items-start justify-center gap-4">
                <h1 className="text-[55px] font-bold leading-[1.2]">
                    The most <span className="text-primary">handsome</span> fella on Twitch
                </h1>
                <p className="text-md text-muted-foreground">
                    He&apos;s got his own website, that&apos;s pretty cool
                </p>

                <div className="mt-4 flex max-w-sm flex-row flex-wrap gap-4">
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a
                            href="https://www.twitch.tv/hansumfella"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitchIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a href="https://discord.gg/hansumfella" target="_blank" rel="noreferrer">
                            <DiscordIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a
                            href="https://www.tiktok.com/@hansumfellaclips"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TikTokIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a
                            href="https://www.youtube.com/@hansumfella"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <YouTubeIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a
                            href="https://www.twitter.com/hansumfellalive"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="default"
                        className="h-fit w-fit px-8 py-4"
                        asChild
                    >
                        <a
                            href="https://www.instagram.com/hansumfella"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstagramIcon className="h-7 w-7 fill-muted-foreground" />
                        </a>
                    </Button>
                </div>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center gap-4">
                <TwitchPlayerNonInteractive channel="hansumfella" className="w-full rounded-lg" />
            </div>
        </div>
    );
}
