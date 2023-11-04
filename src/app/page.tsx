"use client";
import Main from "@/Page/Main"
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight:['900']
})

function Home() {


  return (
      <div>
          <Main />
      </div>
  )
}

export default Home