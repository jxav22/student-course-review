import Image from 'next/image'
import styles from './page.module.css'
import Logo from '../ui/ReviewHeader/Logo/Logo'
import ReviewHeader from '../ui/ReviewHeader/ReviewHeader'
import StarRating from '../ui/StarRating/StarRating'

export default function Home() {
  return (
    <main>
        <ReviewHeader/>
        <StarRating/>
    </main>
  )
}
