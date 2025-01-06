import Link from "next/link";

export default function Header() {
	return (
		<header className="flex flex-col items-center gap-4 bg-pink-600 text-white f py-4">
			<h1 className="font-semibold">Checkpoint : frontend</h1>
			<Link href="/">Countries</Link>
		</header>
	);
}
