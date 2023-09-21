import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { TwitchPlayerNonInteractive } from 'react-twitch-embed';
import { FaDiscord, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

export default function HeroHome() {
  	return (
		<div className="hero min-h-screen overflow-x-hidden -mt-10">
			
			<div className="hero-content grid sm:grid-cols-5 grid-cols-1 gap-4 w-full justify-center items-center">
				
				<div className='sm:col-span-2'>
					<span className="text-5xl font-bold">The most 
						<span className="text-primary"> handsome </span>
					fella on Twitch</span>

					<p className="py-6 text-zinc-300">Hes got his own website, that's pretty cool</p>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-4 sm:w-2/3 w-full'>
						<a href='https://twitch.tv/hansumfella' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaTwitch /></a>
						<a href='https://discord.gg/hansumfella' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaDiscord /></a>
						<a href='https://www.tiktok.com/@hansumfellaclips' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaTiktok /></a>
						<a href='https://www.youtube.com/@hansumfella' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaYoutube /></a>
						<a href='https://twitter.com/HansumFellaLIVE' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaTwitter /></a>
						<a href='https://www.instagram.com/hansumfellaaa/' target='_blank' className="btn btn-outline btn-primary text-2xl btn-lg"><FaInstagram /></a>
					</div>
				</div>

				<div className="sm:flex hidden col-span-3 flex-col justify-center items-center ml-10">
					<TwitchPlayerNonInteractive
						className='rounded-lg w-full'
						channel={'hansumfella'}
					/>
				</div>
			</div>
		</div>
	)
}
