import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>HOME</h1>    

    <div>
        <h2>MEUS PRODUTOS</h2>
        <ul><Link href="/produtos/calca">CALÇA</Link></ul>
        <ul><Link href="/produtos/meia">MEIA</Link></ul>
        <ul><Link href="/produtos/tenis">TÊNIS</Link></ul>
        <ul><Link href="/produtos/camisa">CAMISA</Link></ul>
    </div>
    </>
  )
}
