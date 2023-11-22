import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
// 014b7b83296e43eef308b23531e4ccac3947d466 git secret
const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music for free.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html>
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={[]} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
